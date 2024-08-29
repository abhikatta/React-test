// draw the initial array bar graph
// bubble sort
// in every swap make updates to the bar graph

import "./style.css";
let array: number[] = [];

const div = document.getElementById("app") as HTMLDivElement;
const canvas: HTMLCanvasElement = document.createElement("canvas");
const rangeElem = document.getElementById("array-range") as HTMLInputElement;
const rangeTextElem = document.getElementById(
    "selected-range"
) as HTMLInputElement;
const startButton = document.getElementById("start") as HTMLButtonElement;

rangeElem.addEventListener("input", function (e) {
    const val = e.target as HTMLInputElement;
    const rangeVal = Number(val.value);
    rangeTextElem.textContent = "Value: " + rangeVal;
    let newArray: number[] = [];
    for (let i = 0; i < rangeVal; i++) {
        let randomNum = Math.floor(Math.random() * rangeVal);
        newArray.push(randomNum);
    }
    array = [...newArray];
    drawBars(array);
});

div?.append(canvas);

function drawBars(array: number[]) {
    const cxt = canvas.getContext("2d")!;
    canvas.width = screen.availWidth * 0.7;
    canvas.height = screen.availHeight * 0.7;
    const barWidth = canvas.width / array.length;
    for (let i = 0; i < array.length; i++) {
        const h = canvas.height - (canvas.height - array[i]);
        const w = canvas.width / array.length;
        cxt.fillStyle = "rgba(100,200,300)";
        cxt?.fillRect(i * barWidth, canvas.height - array[i], w, h);
        cxt.textRendering = "geometricPrecision";
        cxt.textAlign = "center";
        cxt.textBaseline = "ideographic";
        cxt.fillText(
            array[i].toString(),
            i * barWidth + barWidth / 2,
            canvas.height - array[i] - 5
        );
    }
}

drawBars(array);

async function bubbleSort() {
    let newArray = [...array];
    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < newArray.length; j++) {
            {
                if (newArray[i] < newArray[j]) {
                    let temp = newArray[i];
                    newArray[i] = newArray[j];
                    newArray[j] = temp;
                }
                drawBars(newArray);
                await new Promise((resolve) => setInterval(resolve, 5));
            }
        }
    }
    rangeElem.disabled = false;
}

startButton.addEventListener("click", async () => {
    rangeElem.disabled = true;
    bubbleSort();
});

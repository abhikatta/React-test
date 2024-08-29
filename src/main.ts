import "./style.css";
// '?worker' tells Vite to treat the imported file as a Web Worker
import MyWorker from "./calculation.ts?worker";
const calculator = new MyWorker();

let grid: number[][] = [[]];
const initialValue = 40;
const [rows, cols] = [initialValue, initialValue];

function make2DArray(rows: number, cols: number): number[][] {
    let arr = new Array(rows);
    for (let i = 0; i < rows; i++) {
        arr[i] = new Array(cols).fill(0);
    }
    return arr;
}

grid = make2DArray(rows, cols);
const newGrid = make2DArray(rows, cols);

const div = document.getElementById("app");
const canvas: HTMLCanvasElement = document.createElement("canvas");

const setupGrid = () => {
    canvas.width = rows * 10;
    canvas.height = cols * 10;
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d")!;
        const cellWidth = canvas.width / cols;
        const cellHeight = canvas.height / rows;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                ctx.roundRect(
                    j * cellWidth,
                    i * cellHeight,
                    cellWidth,
                    cellHeight
                );

                ctx.fillStyle =
                    grid[i][j] === 0 ? "black" : "rgba(203,189,147,0.8)";

                ctx.fillRect(
                    j * cellWidth,
                    i * cellHeight,
                    cellWidth,
                    cellHeight
                );
            }
        }
    }
};

setupGrid();

canvas.style.border = "1px solid white";
canvas.addEventListener("mousemove", () => {
    onmousemove = function (e) {
        const x = Math.ceil((e.offsetY * initialValue) / canvas.height) - 1;
        const y = Math.ceil((e.offsetX * initialValue) / canvas.width) - 1;
        if (x < rows && y < cols) {
            grid[x][y] = 1;
            setupGrid();
        }
    };
});

div?.append(canvas);

const updateGrid = () => {
    calculator.postMessage({ rows, cols, grid, newGrid });
    calculator.onmessage = function (e) {
        grid = e.data;
        setupGrid();
    };
    calculator.onerror = function (e) {
        console.error(e.message);
    };
};

setInterval(updateGrid, 40);

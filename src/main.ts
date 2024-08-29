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

grid[0][1] = 1;
grid[2][2] = 1;
grid[1][3] = 1;

grid[rows - rows / 2][1] = 1;
const div = document.getElementById("app");
const canvas: HTMLCanvasElement = document.createElement("canvas");

canvas.addEventListener("mousedown", () => {
    onmousedown = function (e) {
        console.log(e.x, e.y);
        const x = Math.ceil((e.offsetX * initialValue) / canvas.width) - 1;
        const y = Math.ceil((e.offsetY * initialValue) / canvas.height) - 1;
        console.log(x, y);
    };
});

const setupGrid = () => {
    canvas.width = rows * 10;
    canvas.height = cols * 10;
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d")!;
        const cellWidth = canvas.width / cols;
        const cellHeight = canvas.height / rows;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                ctx.strokeStyle = "white";
                ctx.strokeRect(
                    j * cellWidth,
                    i * cellHeight,
                    cellWidth,
                    cellHeight
                );
                ctx.fillStyle = grid[i][j] === 0 ? "black" : "white";
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

canvas.style.backgroundColor = "beige";
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

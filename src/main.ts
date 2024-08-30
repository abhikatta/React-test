import "./style.css";
// '?worker' tells Vite to treat the imported file as a Web Worker
import MyWorker from "./calculation.ts?worker";
const calculator = new MyWorker();

let grid: number[][] = [[]];
const initialValue = 40;
let hue = 0;

const [rows, cols] = [initialValue, initialValue];
const div = document.getElementById("app");
const canvas: HTMLCanvasElement = document.createElement("canvas");

function make2DArray(rows: number, cols: number): number[][] {
    let arr = new Array(rows);
    for (let i = 0; i < rows; i++) {
        arr[i] = new Array(cols).fill(0);
    }
    return arr;
}

grid = make2DArray(rows, cols);
const newGrid = make2DArray(rows, cols);

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
                    grid[i][j] === 0
                        ? "black"
                        : `hsl(${(grid[i][j] + 1) % 360}, 100%, 40%)`; // hot sand ig
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

// TODO: fix the mouse position algo
canvas.addEventListener("mousemove", () => {});

div?.append(canvas);

const updateGrid = () => {
    calculator.postMessage({ rows, cols, grid, newGrid, hue });
    calculator.onmessage = function (e) {
        grid = e.data;
        setupGrid();
    };
    calculator.onerror = function (e) {
        console.error(e.message);
    };
};

setInterval(updateGrid, 20);

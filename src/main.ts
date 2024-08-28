import "./style.css";
const initialValue = 40;
const [rows, cols] = [initialValue, initialValue];

let grid: (number | null)[][] = [];

function make2DArray(rows: number, cols: number) {
    let arr = new Array(rows);
    for (let i = 0; i < rows; i++) {
        arr[i] = new Array(cols).fill(0);
    }
    return arr;
}

grid = make2DArray(rows, cols);

grid[0][1] = 1;
grid[2][2] = 1;
grid[1][3] = 1;

grid[rows - rows / 2][1] = 1;
const div = document.getElementById("app");
const canvas: HTMLCanvasElement = document.createElement("canvas");

canvas.addEventListener("mousemove", () => {
    onmousemove = function (e) {
        console.log(e.x, e.y);
    };
});

function setupGrid() {
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
}

setupGrid();

function updateGrid() {
    const newGrid = make2DArray(rows, cols);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                if (i < rows - 1 && grid[i + 1][j] === 0) {
                    newGrid[i + 1][j] = 1;
                    newGrid[i][j] = 0;
                } else {
                    newGrid[i][j] = 1;
                }
            }
        }
    }
    grid = newGrid;
    setupGrid();
}

canvas.style.backgroundColor = "beige";

div?.append(canvas);

setInterval(updateGrid, 40);

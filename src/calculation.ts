interface eventDataProps {
    rows: number;
    cols: number;
    grid: number[][];
    newGrid: number[][];
}

self.onmessage = function (event: MessageEvent<eventDataProps>) {
    const { rows, cols, grid, newGrid } = event.data;
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
    self.postMessage(newGrid);
};

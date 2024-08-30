export const createRandomColor = () => {
    const RGB = [
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255),
        Math.round(Math.random() * 255),
    ];
    return RGB;
};

// export class Ball {
//     radius: number;
//     constructor(radius: number) {
//         this.radius = radius;
//     }
//     getBall(): HTMLDivElement {
//         const ball = document.createElement("div");
//         ball.style.width = `${this.radius}px`;
//         ball.style.height = `${this.radius}px`;
//         ball.style.borderRadius = "50%";
//         const RGB = createRandomColor();
//         ball.style.backgroundColor = `rgba(${RGB[0]},${RGB[1]},${RGB[2]})`;
//         console.log(ball);

//         return ball;
//     }
// }

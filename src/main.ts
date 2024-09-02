import "./style.css";
import { Ball } from "./Ball";
import { drawBall } from "./utils";

const PARTICLE_COUNT = 50;
export const MAX_RADIUS = 60;
export const MIN_RADIUS = 10;

const CANVAS_HEIGHT = screen.height * 0.8;
const CANVAS_WIDTH = screen.width * 0.7;

export const canvas = document.createElement("canvas");

let balls: Ball[] = [];
for (let index = 0; index < PARTICLE_COUNT; index++) {
    balls.push(new Ball());
}

const initialSetup = () => {
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    const app = document.getElementById("app");
    app?.append(canvas);

    drawBall(canvas, [...balls]);
};

const startSimulation = (balls: Ball[]) => {
    initialSetup();
    const newCanvas = document.createElement("canvas");
    newCanvas.width = CANVAS_WIDTH;
    newCanvas.height = CANVAS_HEIGHT;
    const start = () => {
        for (let index = 0; index < balls.length; index++) {
            const ball = balls[index];
            ball.moveBall();
            drawBall(newCanvas, [ball]);
        }
        requestAnimationFrame(() => startSimulation([...balls]));
    };
    start();
};

requestAnimationFrame(() => startSimulation([...balls]));

// TODO:
// create the radius of the balls accordingly and make responsive when resizing:

// window.addEventListener("resize", (e) => {
//     // console.log(window.innerWidth);
//     // console.log(window.innerHeight);

//     const windowEle = e.target as Window;
//     for (let index = 0; index < balls.length; index++) {
//         let ball = balls[index];
//         // default / full size = 1528w x 740h
//         const per =
//             (windowEle.innerHeight / window.innerHeight) *
//             (windowEle.innerWidth / window.innerWidth);
//         const newBall = ball;
//         const newRadius = (ball.radius * 100) / per;
//         newBall.radius = newRadius;
//         ball = newBall;
//     }
//     requestAnimationFrame(() => startSimulation([...balls]));
// });

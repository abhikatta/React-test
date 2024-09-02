import "./style.css";
import { Ball } from "./Ball";
import { drawBall } from "./utils";

export const MAX_RADIUS = 60;
export const MIN_RADIUS = 10;

export const canvas = document.createElement("canvas");

let ball1 = new Ball();

const initialSetup = () => {
    canvas.width = screen.width * 0.8;
    canvas.height = screen.height * 0.7;

    const app = document.getElementById("app");
    app?.append(canvas);

    drawBall(canvas, ball1);
};

const startSimulation = (ball: Ball) => {
    initialSetup();
    const context = canvas.getContext("2d");
    context?.clearRect(0, 0, canvas.width, canvas.height);
    const start = () => {
        ball.moveBall();
        drawBall(canvas, ball);
        requestAnimationFrame(() => startSimulation(ball));
    };
    start();
};

requestAnimationFrame(() => startSimulation(ball1));

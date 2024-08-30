import { createRandomColor } from "./utils";
import "./style.css";

const MAX_RADIUS = 60;
const MIN_RADIUS = 20;
const canvas = document.createElement("canvas");
canvas.width = screen.width * 0.8;
canvas.height = screen.height * 0.7;
const app = document.getElementById("app");
app?.append(canvas);

// STEP 1:
// draw a ball on the canvas and make it move in a random direction and have:
// velocity, radius, mass, time

const createBall = () => {
    const radius =
        Math.ceil(Math.random() * MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS;
    const centerX =
        canvas.width / (Math.random() * canvas.width) +
        Math.random() * canvas.width +
        radius;
    const centerY =
        canvas.height / (Math.random() * canvas.height) +
        Math.random() * canvas.height +
        radius;
    const mass = radius * radius;
    const velocity = Math.ceil(Math.random() * radius);
    const dt = Math.floor(Math.random() * radius);
    const RGB = createRandomColor();
    const fillStyle = `rgba(${RGB[0]},${RGB[1]},${RGB[2]})`;
    const strokeStyle = `rgba(${RGB[2]},${RGB[0]},${RGB[1]})`;
    const vector = [Math.random(), Math.random()];
    const direction = Math.ceil(Math.random() * 4);
    return {
        radius,
        direction,
        centerX,
        centerY,
        mass,
        velocity,
        dt,
        fillStyle,
        strokeStyle,
        vector,
    };
};
type BallProps = ReturnType<typeof createBall>;
let ball1: BallProps = createBall();

function drawBall(ballProps: BallProps) {
    const context = canvas.getContext("2d");
    if (context) {
        context.beginPath();
        context.arc(
            ballProps.centerX,
            ballProps.centerY,
            ballProps.radius,
            0,
            2 * Math.PI,
            false
        );
        context.fillStyle = ballProps.fillStyle;
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = ballProps.strokeStyle;
        context.stroke();
        context.closePath();
    }
}

drawBall(ball1);

// TODO:
// function collisionDetected(ball: BallProps): boolean {
//     return false;
// }

const moveBall = () => {
    const newBall1 = { ...ball1 };

    switch (ball1.direction) {
        case 1:
            newBall1.centerX = ball1.centerX +=
                ball1.vector[0] * ball1.velocity;
            newBall1.centerY = ball1.centerY +=
                ball1.vector[1] * ball1.velocity;
            break;
        case 2:
            newBall1.centerX = ball1.centerX +=
                ball1.vector[0] * ball1.velocity;
            newBall1.centerY = ball1.centerY -=
                ball1.vector[1] * ball1.velocity;
            break;
        case 3:
            newBall1.centerX = ball1.centerX -=
                ball1.vector[0] * ball1.velocity;
            newBall1.centerY = ball1.centerY +=
                ball1.vector[1] * ball1.velocity;
            break;
        case 4:
            newBall1.centerX = ball1.centerX -=
                ball1.vector[0] * ball1.velocity;
            newBall1.centerY = ball1.centerY -=
                ball1.vector[1] * ball1.velocity;
            break;

        default:
            break;
    }
    ball1 = { ...newBall1 };
    const context = canvas.getContext("2d");
    context?.clearRect(0, 0, canvas.width, canvas.height);
    drawBall(ball1);
    requestAnimationFrame(moveBall);
};

requestAnimationFrame(moveBall);

import { BallProps } from "./Ball";

interface RandomNumberProps {
    range?: number;
    roundingMethod?: "floor" | "ceil" | "round";
}

export function getRand(
    range: RandomNumberProps["range"] = 1,
    roundingMethod?: RandomNumberProps["roundingMethod"]
) {
    const randomValue = Math.random() * range;
    switch (roundingMethod) {
        case "floor":
            return Math.floor(randomValue);
        case "ceil":
            return Math.ceil(randomValue);
        case "round":
            return Math.round(randomValue);
        default:
            return randomValue;
    }
}

export const createRandomColor = () => {
    const RGB = {
        R: getRand(255, "round"),
        G: getRand(255, "round"),
        B: getRand(255, "round"),
    };
    return RGB;
};

export function drawBall(canvas: HTMLCanvasElement, ballProps: BallProps) {
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

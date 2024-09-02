import { canvas, MAX_RADIUS, MIN_RADIUS } from "./main";
import { createRandomColor, getRand } from "./utils";

export interface BallProps {
    centerX: number;
    centerY: number;
    radius: number;
    mass: number;
    velocity: number;
    dt: number;
    RGB: ReturnType<typeof createRandomColor>;
    fillStyle: string;
    strokeStyle: string;
    vector: { x: number; y: number };
    direction: number;
}

export class Ball {
    centerX: number;
    centerY: number;
    radius: number;
    mass: number;
    velocity: number;
    dt: number;
    RGB: ReturnType<typeof createRandomColor>;
    fillStyle: string;
    strokeStyle: string;
    vector: { x: number; y: number };
    direction: number;
    constructor() {
        this.radius = getRand(MAX_RADIUS - MIN_RADIUS, "ceil") + MIN_RADIUS;
        this.centerX =
            canvas.width / (Math.random() * canvas.width) +
            getRand(canvas.width) +
            this.radius;
        this.centerY =
            canvas.height / (Math.random() * canvas.height) +
            getRand(canvas.height) +
            this.radius;
        this.mass = getRand(this.radius * 2);
        this.velocity = getRand(this.radius / 3, "ceil");
        this.dt = getRand(this.radius, "floor");
        this.RGB = createRandomColor();
        this.fillStyle = `rgba(${this.RGB.R},${this.RGB.G},${this.RGB.B})`;
        this.strokeStyle = `rgba(${this.RGB.G},${this.RGB.B},${this.RGB.R})`;
        this.vector = { x: getRand(), y: getRand() };
        this.direction = getRand(4, "ceil");
    }
    detectWallCollision() {
        if (
            this.centerX + this.radius >= canvas.width ||
            this.centerX - this.radius <= 0
        ) {
            this.vector.x *= -1;
        }
        if (
            this.centerY + this.radius >= canvas.height ||
            this.centerY - this.radius <= 0
        ) {
            this.vector.y *= -1;
        }
    }
    // detectBallCollision(otherBall: BallProps) {
    //     const distance = Math.sqrt(
    //         (otherBall.centerX - this.centerX) ** 2 +
    //             (otherBall.centerY - this.centerY) ** 2
    //     );
    //     if (distance <= this.radius + otherBall.radius) {
    //         this.vector.y *= -1;
    //         this.vector.x *= -1;
    //     }
    // }
    moveBall() {
        const newCenterX = this.vector.x * this.velocity;
        const newCenterY = this.vector.y * this.velocity;
        switch (this.direction) {
            case 1:
                this.centerX += newCenterX;
                this.centerY += newCenterY;
                break;
            case 2:
                this.centerX += newCenterX;
                this.centerY -= newCenterY;
                break;
            case 3:
                this.centerX -= newCenterX;
                this.centerY += newCenterY;
                break;
            case 4:
                this.centerX -= newCenterX;
                this.centerY -= newCenterY;
                break;
            default:
                break;
        }
        this.detectWallCollision();
    }
}

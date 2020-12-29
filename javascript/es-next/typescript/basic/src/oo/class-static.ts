class Grid {
    static origin = { x: 0, y: 0 };

    constructor(public scale: number) { }

    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}

console.log(Grid.origin);

// ts prop + method
// js method

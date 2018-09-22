export class Point {
    x: number
    y: number

    constructor(pointOrX: PointArgs[0] = 0, y = 0) {
        let x = 0

        if (Array.isArray(pointOrX)) {
            x = pointOrX[0] || 0
            y = pointOrX[1] || 0
        } else if (typeof pointOrX === 'object') {
            x = (pointOrX as Point).x || 0
            y = (pointOrX as Point).y || 0
        } else if (typeof pointOrX === 'number') {
            x = pointOrX
            y = y
        }

        this.x = x
        this.y = y
    }

    add(point: Point) {
        this.x += point.x
        this.y += point.y
        return this
    }

    subtract(point: Point) {
        this.x -= point.x
        this.y -= point.y
        return this
    }

    multiply(point: Point) {
        this.x *= point.x
        this.y *= point.y
        return this
    }

    divide(point: Point) {
        this.x /= point.x
        this.y /= point.y
        return this
    }
}

export type PointArgs = [Partial<Point> | [number?, number?] | number | undefined, number?]

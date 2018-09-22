import { Point } from '.'

describe('creation', () => {
    test('accepts no parameters', () => {
        expect(new Point()).toEqual({ x: 0, y: 0 })
    })

    test('accepts 1 number', () => {
        expect(new Point(1)).toEqual({ x: 1, y: 0 })
    })

    test('accepts undefined and 1 number', () => {
        expect(new Point(undefined, 1)).toEqual({ x: 0, y: 1 })
    })

    test('accepts 2 numbers', () => {
        expect(new Point(1, 2)).toEqual({ x: 1, y: 2 })
    })

    test('accepts an empty object', () => {
        expect(new Point({})).toEqual({ x: 0, y: 0 })
    })

    test('accepts an object with x', () => {
        expect(new Point({ x: 1 })).toEqual({ x: 1, y: 0 })
    })

    test('accepts an object with y', () => {
        expect(new Point({ y: 1 })).toEqual({ x: 0, y: 1 })
    })

    test('accepts an object with x and y', () => {
        expect(new Point({ x: 1, y: 2 })).toEqual({ x: 1, y: 2 })
    })

    test('accepts an empty array', () => {
        expect(new Point([])).toEqual({ x: 0, y: 0 })
    })

    test('accepts an array with 1 number', () => {
        expect(new Point([1])).toEqual({ x: 1, y: 0 })
    })

    test('accepts an array with 2 numbers', () => {
        expect(new Point([1, 2])).toEqual({ x: 1, y: 2 })
    })

    test('accepts an array with undefined and 1 number', () => {
        expect(new Point([undefined, 1])).toEqual({ x: 0, y: 1 })
        expect(new Point([1, undefined])).toEqual({ x: 1, y: 0 })
    })
})

describe('methods', () => {
    describe('add', () => {
        test('adds the coordinates of the passed point to itself', () => {
            const point = new Point(1, 2)
            point.add(new Point(3, 4))

            expect(point).toEqual({ x: 4, y: 6 })
        })

        test('returns itself', () => {
            const point = new Point(1, 2)
            expect(point.add(new Point())).toBe(point)
        })
    })

    describe('subtract', () => {
        test('subtracts the coordinates of the passed point from itself', () => {
            const point = new Point(3, 4)
            point.subtract(new Point(1, 2))

            expect(point).toEqual({ x: 2, y: 2 })
        })

        test('returns itself', () => {
            const point = new Point(1, 2)
            expect(point.subtract(new Point())).toBe(point)
        })
    })

    describe('multiply', () => {
        test('multiplies the coordinates of the passed point by itself', () => {
            const point = new Point(1, 2)
            point.multiply(new Point(3, 4))

            expect(point).toEqual({ x: 3, y: 8 })
        })

        test('returns itself', () => {
            const point = new Point(1, 2)
            expect(point.multiply(new Point())).toBe(point)
        })
    })

    describe('divide', () => {
        test('divides the coordinates of the passed point by itself', () => {
            const point = new Point(1, 2)
            point.divide(new Point(3, 4))

            expect(point.x).toBeCloseTo(0.3333)
            expect(point.y).toBe(0.5)
        })

        test('returns itself', () => {
            const point = new Point(1, 2)
            expect(point.divide(new Point())).toBe(point)
        })
    })
})

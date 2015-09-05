exports default class Rectangle {
    // Runs when rectangle is initialized
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Define a getter
    get height() {
        return this._height;
    }

    // Define a setter
    set height(value) {
        if (typeof value !== 'number') {
            throw new Error('"height" must be a number');
        }
        this._height = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (typeof value !== 'number') {
            throw new Error('"width" must be a number');
        }
        this._width = value;
    }

    get area() {
        return this.width * this.height;
    }

    get circumference() {
        return 2 * this.width + 2 * this.height;
    }
}

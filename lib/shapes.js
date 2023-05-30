class Shape {
    constructor (fill, textColor, text) {
        this.fill = fill;
        this.textColor = textColor;
        this.text = text;
    }
    
}

class Circle extends Shape {
    constructor (fill, textColor, text) {
        super(fill, textColor, text);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.fill}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fill}">${this.text}</text>
      
      </svg>`
    }
}

class Square extends Shape {
    constructor (fill, textColor, text) {
        super(fill, textColor, text);
    }
    render() {
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect x="80" y="35" width="150" height="150" fill="${this.fill}"/>

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fill}">${this.text}</text>

</svg>`
    }
}

class Triangle extends Shape {
        constructor (fill, textColor, text) {
            super(fill, textColor, text);
        }
        render() {
    `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 350, 182 56, 182" fill="${this.fill}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fill}">${this.text}</text>

    </svg>`
        }}

module.exports = {
    Triangle, Square, Circle
};
const inquirer  = require("inquirer")
const {Triangle, Square, Circle} = require("./shapes")

const questions = [
    {
        type: "list",
        name: "shape",
        message: "Pick your shape",
        choices: ["Triangle", "Square", "Circle"]
    },
    {
        type: "input",
        name: "text",
        message: "What three letters do you want to print on the shape?"
    },
    {
        type: "list",
        name: "color",
        message: "What color do you want the shape to be?",
        choices: ["Red", "Green", "Blue"]
    }
]

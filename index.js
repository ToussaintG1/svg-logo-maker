const fs = require('fs');
const inquirer = require('inquirer')
const Circle = require('./assets/circle');
const Square = require('./assets/square');
const Triangle = require('./assets/triangle');





const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Please input 3 letters for your logo',
    validate: (input) => {
      if (input.length > 3) {
        return 'Incorrect asnwer';
      }

      return true;
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color would you like the text of your logo to be?',

  },

  {
    type: 'list',
    name: 'shape',
    message: 'What shape would you like your logo to be?',
    choices: [
      'Circle',
      'Triangle',
      'Square'
    ]
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What color would you like your logo to be?',

  },

];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((data) => {
      const { text, textColor, shapeColor, shape } = data;
      console.log(data)
      //Take the answers and create svg file
      // IF statement to figure out what user chose
      let userShape;
      if (shape === 'Circle') {
        userShape = new Circle(text, textColor, shapeColor)
      }
      else if (shape === 'Square') {
        userShape = new Square(text, textColor, shapeColor)
      }
      else {
        userShape = new Triangle(text, textColor, shapeColor)

      }
        fs.writeFile('logo.svg', userShape.render(), (err) => {
          if(err) {
            console.log(err);
          } else {
            console.log('New Shape Created!!!!!!!!')
          }
        }
        
        
      );
    })
    .catch((err) => {
      console.log(err);
    })
}


// Function call to initialize app
init();



const fs = require('fs');
const inquirer = require('inquirer')
const circle = require('./assets/circle');
const square = require('./assets/square');
const triangle = require('./assets/triangle');





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
        //Take the answers and create svg file
        // IF statement to figure out what user chose
        if(shape === 'Circle') {
          const userCircle = new Circle(text, textColor, shapeColor) 
          //Console log for now
          console.log(userCircle.render())
          
        }
    })
    .catch((err) => {
        console.log(err);
    })
}


// Function call to initialize app
init();



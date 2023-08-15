//Imports Shape Class
const Shape = require('./shape')
// Class for Square
// This class represents a Square
class Square extends Shape {
render() {
    return 
    `<svg width="300" height="200">
    
      <rect width="300" height="100" fill="${this.shapeColor}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
    </svg>`;
  }
}

module.exports = Square;




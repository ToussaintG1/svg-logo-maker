//Imports Shape Class
const Shape = require('./shape')
class Triangle extends Shape{
  render() {
    return `<svg height="300" width="200">

    <polygon points="200,10 250,190 160,210" fill="${this.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
  </svg>`;
  }
};

module.exports = Triangle;
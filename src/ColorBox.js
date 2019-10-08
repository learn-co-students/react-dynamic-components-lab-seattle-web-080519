import React, { Component } from 'react';

class ColorBox extends Component {
  
// checkOpacity = () => {
  // this.opacity = ColorBox.opacity
  // console.log(this);

  // if (ColorBox.props.opacity >= 0.2) {
  //   this.opacity = ColorBox.props.opacity - 0.1
  //   return this.opacity
  // } else {}
  //   this.opacity = null
  //   return this.opacity
  // }


  render() {
    console.log(this.props.opacity);
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity = {this.props.opacity-0.1} /> : null}
      </div>
    )
  }
  
}

export default ColorBox;


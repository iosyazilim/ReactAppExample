import React from 'react';
import styled from 'styled-components';

const StyleSlider = styled.div`
  width: 400px;
  height: 150px;
  padding: 0;
  margin-left: 40%;
  & > input[type=range] {
    -webkit-appearance: none;
  width: 100%;
  margin: 13.8px 0;
  }
  & > input[type=range]:focus {
  outline: none;
  }
  & > input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}

& > input[type=range]::-webkit-slider-thumb {
    box-shadow: 0.9px 0.9px 1px #000031, 0px 0px 0.9px #00004b;
  border: 1.8px solid #00001e;
  height: 26px;
  width: 26px;
  border-radius: 15px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7.5px;
}
& > input[type=range]:focus::-webkit-slider-runnable-track {
  background: #367ebd;
}
& > input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}

& > input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}

& > input[type=range]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
& > input[type=range]::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
& > input[type=range]::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
& > input[type=range]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  height: 8.4px;
}
& > input[type=range]:focus::-ms-fill-lower {
  background: #3071a9;
}
& > input[type=range]:focus::-ms-fill-upper {
  background: #367ebd;
}
`;

const Output = styled.output`

  position: absolute;
  background-color: red;
  width: 40px; 
  height: 30px; 
  text-align: center; 
  color: white; 
  border-radius: 10px; 
  display: inline-block; 
  font: bold 15px/30px Georgia;
  bottom: 175%;
  left: 0;
  margin-left: -1%;

::after { 
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-top: 10px solid #999999;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  margin-top: -1px;
}
`;

class SliderPage extends React.Component {
  constructor(props) {
    super(props);
    const { min, max } = this.props;
    
  }

  alerCagir = () =>{
     let ter = document.getElementById('ercan').value;
    alert(ter);
    }

  render() {
    const { min, max, sliderValue } = this.props;
    return (
      <div>
        <StyleSlider class="slider-wrapper">
          <label htmlFor="special">0</label>
          <input id="ercan" type="range" name="special" min={min} onClick={this.alerCagir} max={max} value={sliderValue} step="1" />
          <Output for="special" onforminput="value = special.valueAsNumber"></Output>
          <label htmlFor="special">100</label>
        </StyleSlider>
      </div>
    );
  }
}

export default SliderPage;

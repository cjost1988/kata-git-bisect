import React from 'react';
import './App.css';

enum ColorEnum {
  RED='red',
  GREEN='green',
}

const colorMatrix: Array<Array<ColorEnum>> = [
  [ColorEnum.GREEN, ColorEnum.RED, ColorEnum.GREEN],
  [ColorEnum.GREEN, ColorEnum.GREEN, ColorEnum.GREEN],
  [ColorEnum.GREEN, ColorEnum.GREEN, ColorEnum.GREEN],
];

function App() {
  return (
    <div className="App">
      <div className="ColorMatrix">
        {colorMatrix.flat().map((color: ColorEnum) => <div className={color}>&nbsp;</div>)}
      </div>
    </div>
  );
}

export default App;

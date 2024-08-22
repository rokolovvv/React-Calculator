import { useState } from "react";
import Calculator from "./Calculator";
import './App.css';

const App = (props) => {
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [operation , setOperation] = useState('add');

return (
    <div className="App">
        <input type="number" value={x} onChange={(e)  => setX(Number(e.target.value))} />
        <input type="number" value={y} onChange={(e)  => setY(Number(e.target.value))} />

        <button onClick={() => setOperation('add')}>Add</button>
        <button onClick={() => setOperation('minus')}>Subtract</button>
        <button onClick={() => setOperation('times')}>Multiply</button>
        <button onClick={() => setOperation('divide')}>Divide</button>
        <button onClick={() => setOperation('power')}>Power</button>

        <Calculator x={x} y={y} operation={operation} />
    </div>
  );
};

export default App;
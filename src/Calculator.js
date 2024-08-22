import './App.css';

const Calculator = (props) => {
  const { x, y, operation} = props;

  const add = () => x + y;
  const minus = () => x - y;
  const times = () => x * y;
  const divide = () => x / y;
  const power = () => Math.pow(x, y);

  const Calculate = () => {
    switch (operation) {
      case 'add':
        return add();
      case 'minus':
        return minus();
      case 'times':
        return times();
        case 'divide':
          return divide();
        case 'power':
          return power();     
    }
  }

return (
  <div>
    <h3>Result: {Calculate()}</h3>
  </div>
);
};

export default Calculator;
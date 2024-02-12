import './App.css';
import { greenBg, increase, decrease, redBg, yellowBg } from './actions'
import { useSelector,useDispatch } from 'react-redux'

function App() {
  const val = useSelector((state)=>state.updateValue)
  const col = useSelector((state)=>state.updateColor)
  const dispatch = useDispatch()  
  return (
    <div className = {col}>
      <h2>Redux counter</h2>
      <button onClick={() => dispatch(decrease())}> - </button>
      <input type="text" value={val} readOnly/>
      <button onClick={() => dispatch(increase())}> + </button>

      <br />

      <h2>Bg Color Picker</h2>
      <button onClick={() => dispatch(greenBg())}> Green </button>
      <button onClick={() => dispatch(yellowBg())}> Yellow </button>
      <button onClick={() => dispatch(redBg())}> Red </button>

    </div>
  );
}
export default App;

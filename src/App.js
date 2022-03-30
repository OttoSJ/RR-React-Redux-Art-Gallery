import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { clearData, fetchData, incrementId, decrementId, inputId } from './features/dataSlice'

function App() {
  // your logic goes here!

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(fetchData())}>Thunk!</button>
        <button onClick={() => dispatch(clearData())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
      </div>
      <input onChange={(e) => { }} />
      <div>
        {/* Once you have plugged everything in, render the image here! */}
      </div>
    </div>
  );
}

export default App;

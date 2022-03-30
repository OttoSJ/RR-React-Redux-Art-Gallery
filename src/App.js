import './App.css';
import { useSelector, useDispatch } from 'react-redux'
<<<<<<< HEAD
=======
import { clearData, fetchData, incrementId, decrementId, inputId } from './features/dataSlice'
>>>>>>> solution

function App() {
  // your logic goes here!

  return (
    <div className="App">
      <div>
<<<<<<< HEAD
        <button onClick={() => {}}>Trigger Thunk</button>
        <button onClick={() => {}}>Clear</button>
        <button onClick={() => {}}>Next</button>
        <button onClick={() => {}}>Back</button>
=======
        <button onClick={() => dispatch(fetchData())}>Thunk!</button>
        <button onClick={() => dispatch(clearData())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
>>>>>>> solution
      </div>
      <input onChange={(e) => { }} />
      <div>
        {/* Once you have plugged everything in, render the image here! */}
      </div>
    </div>
  );
}

export default App;

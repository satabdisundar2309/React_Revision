import { useState } from "react";
import "./App.css";
import Additional from "./components/Additional";

function App() {
  const [count, setCount] = useState(0);
  let reset = false;
  function decHandler() {
    setCount(count - 1);
  }
  function incHandler() {
    setCount(count + 1);
  }
  function resetHandler() {
    setCount(0);
    reset = false;
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">
        Increment And Decrement
      </div>
      <div className="flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button
          onClick={decHandler}
          className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          -
        </button>
        <div className="font-bold gap-12 text-5xl text-center">{count}</div>
        <button
          onClick={incHandler}
          className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          +
        </button>
      </div>
      <Additional count={count} setCount={setCount}></Additional>
      <button
        onClick={resetHandler}
        className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg "
      >
        Reset
      </button>
    </div>
  );
}

export default App;

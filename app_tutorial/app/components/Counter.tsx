"use client";
import { useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";
/*
const RandomComponent = () => {
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    console.log("hmm, this is interesting");
    const intID = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    // does not stop, keeps going
    // every time we render component new interval gets created
    return () => clearInterval(intID);
  }, [counter]);
  return <h1>{counter}</h1>;
};*/

export default function Counter() {
  const [counter, setCounter] = useState(0);
  /*useEffect(() => {
    const intID = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    // does not stop, keeps going
    // every time we render component new interval gets created
    //return () => clearInterval(intID);
  }, []);*/

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="flex flex-col items-center w-[100px]">
      <p className="text-5xl font-bold">{counter}</p>
      <button
        onClick={increaseCounter}
        className=" bg-cyan-400 rounded text-white px-4 py-2 mt-4"
      >
        Increase!
      </button>
    </div>
  );
}

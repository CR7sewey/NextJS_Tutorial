"use client";
import React from "react";
import { useFormStatus } from "react-dom";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";
const btnStyle2 =
  "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded capitalize";

function SubmitButton() {
  const formState = useFormStatus();

  const pending = formState.pending === true;
  console.log(formState, "fs");
  return (
    <button
      type="submit"
      className={pending ? btnStyle2 : btnStyle}
      disabled={pending}
    >
      {pending ? "pending..." : "submit"}
    </button>
  );
}

export default SubmitButton;

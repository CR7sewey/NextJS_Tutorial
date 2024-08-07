"use client"; // essencial
import { useFormState } from "react-dom";
import React from "react";

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";

// needs to be async
/*const createUser = async () => {
  "use server"; // needed bcs we are inside of the server componemt
  console.log("aqui!!");
};*/
import { createUser as action } from "../utils/actions";
import SubmitButton from "./SubmitButton";

function Form() {
  const [message, createUser] = useFormState(action, null);
  return (
    <form className={formStyle} action={createUser}>
      {message && <p>{message}</p>}
      <h2
        className="text-2xl capitalize 
  mb-4"
      >
        create user
      </h2>
      <input
        type="text"
        name="firstName"
        defaultValue="Peter"
        className={inputStyle}
        required
      />
      <input
        type="text"
        name="lastName"
        defaultValue="Crouch"
        className={inputStyle}
        required
      />
      <SubmitButton />
    </form>
  );
}

export default Form;

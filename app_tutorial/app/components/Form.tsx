import React from "react";

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";

// needs to be async
/*const createUser = async () => {
  "use server"; // needed bcs we are inside of the server componemt
  console.log("aqui!!");
};*/
import { createUser } from "../utils/actions";

function Form() {
  return (
    <form className={formStyle} action={createUser}>
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
      <button type="submit" className={btnStyle}>
        submit
      </button>
    </form>
  );
}

export default Form;

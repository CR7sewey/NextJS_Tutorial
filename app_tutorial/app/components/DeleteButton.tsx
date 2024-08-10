"use client";
import React from "react";
import { deleteUser2 as action, removeUser } from "../utils/actions";
import { useFormState } from "react-dom";

function DeleteButton({ id }: { id: string }) {
  /*const deleteMeToServer = (id: string): void => {
    deleteUser(id);
  };*/
  const [message, deleteUser] = useFormState(action, null);

  const removeUserWithId = removeUser.bind(null, id); // id can be an entire object

  return (
    <form action={removeUserWithId}>
      <input type="hidden" name="id" value="id" />
      <button
        type="submit"
        className="bg-red-700 rounded text-white px-4 py-2 mt-4"
      >
        Remove Me!
      </button>
    </form>
  );
}

export default DeleteButton;
/**
 * <button
        type="submit"
        className="mx-5 bg-red-700 rounded text-white px-4 py-2 mt-4"
        onClick={() => deleteMeToServer(id)}
      >
        Remove Me!
      </button>
 */

/** problem - we can see in html the id value
       * <form action={deleteUser}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="bg-red-700 rounded text-white px-4 py-2 mt-4"
      >
        Remove Me!
      </button>
    </form>
       */

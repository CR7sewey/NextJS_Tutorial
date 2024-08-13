import React from "react";
import { fetchUsers, type User } from "../utils/actions";
import DeleteButton from "./DeleteButton";

async function UsersList() {
  const users = await fetchUsers();
  console.log(users);

  return (
    <>
      <h3 className="text-xl">Users List</h3>
      <div className="mt-4">
        {users.length !== 0 ? (
          <div className="max-w-lg">
            {users.map((val) => {
              return (
                <h4
                  key={val.id}
                  className="capitalize text-lg flex justify-between items-center mb-2"
                >
                  {val.firstName} {val.lastName}
                  <DeleteButton id={val.id} />
                </h4>
              );
            })}
          </div>
        ) : (
          <p>No users found ...</p>
        )}
      </div>
    </>
  );
}

export default UsersList;

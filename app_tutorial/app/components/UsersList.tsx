import React from "react";
import { fetchUsers, type User } from "../utils/actions";

async function UsersList() {
  const users = await fetchUsers();
  console.log(users);
  return (
    <>
      <h3 className="text-xl">Users List</h3>
      <div className="mt-4">
        {users.length !== 0 ? (
          users.map((val) => {
            return (
              <h4 key={val.id} className="capitalize text-lg">
                {val.firstName} {val.lastName}
              </h4>
            );
          })
        ) : (
          <p>No users found ...</p>
        )}
      </div>
    </>
  );
}

export default UsersList;

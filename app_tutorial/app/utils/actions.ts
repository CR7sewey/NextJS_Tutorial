"use server";
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache"; // bcs next is cache strong oriented and dowes not update directly when submiting the form
import { redirect } from "next/navigation";
const jsonURL = "users.json";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (prevState: any, formData: FormData) => {
  console.log(prevState, "this");
  ("use server");
  await new Promise((resolve, reject) => {
    // just a delay to see the effect
    setTimeout(resolve, 3000); // needs to be in a Promeise to affect (time) the follwoing Promises (await)
  });
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  //const rawData = Object.fromEntries(formData); // hte usual aproach
  const newUser: User = {
    id: Date.now().toString(),
    firstName,
    lastName,
  };
  console.log("aqui!!", firstName, lastName);

  try {
    await saveUsers(newUser);
    revalidatePath("/actions");
    //throw Error("erro");
    // redirect('/') trigger an error
    return "user created successfully...";
  } catch (e) {
    console.log(e);
    return "failed to create user...";
  }
  //revalidatePath("/actions");
  //redirect("/"); // navigate back to the home page, dont place it in try and catch
};

// BASICALY WE DIRECTLY WORK WITH OUR BACKEND CODE IN OUR REACT COMPONENT
export const fetchUsers = async (): Promise<User[]> => {
  const file = await readFile(jsonURL, { encoding: "utf-8" }); // promise
  const users: User[] = file ? JSON.parse(file) : [];

  return users;
};

export const saveUsers = async (user: User): Promise<void> => {
  const users: User[] = await fetchUsers();
  users.push({ ...user });
  await writeFile(jsonURL, JSON.stringify(users));
};

export const deleteUser = async (formData: FormData): Promise<void> => {
  console.log(formData, "aaaaaaaa");
  const id = formData.get("id") as string;
  const users: User[] = await fetchUsers();
  const new_users = users.filter((vals) => vals.id !== id);
  await writeFile(jsonURL, JSON.stringify(new_users));
  revalidatePath("/actions");
};

export const deleteUser2 = async (
  prevState: any,
  formData: FormData
): Promise<void> => {
  console.log(prevState, "this");

  const id = formData.get("id") as string;
  console.log(id, "sou um id");

  const users: User[] = await fetchUsers();
  const new_users = users.filter((vals) => vals.id !== id);
  await writeFile(jsonURL, JSON.stringify(new_users));
  revalidatePath("/actions");
};

export const removeUser = async (id: string, formData: FormData) => {
  const name = formData.get("name") as string;
  console.log(name);

  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id !== id);
  await writeFile(jsonURL, JSON.stringify(updatedUsers));
  revalidatePath("/actions");
};

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

export const createUser = async (formData: FormData) => {
  "use server";
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
    // redirect('/') trigger an error
  } catch (e) {
    console.log(e);
  }
  //revalidatePath("/actions");
  redirect("/"); // navigate back to the home page, dont place it in try and catch
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

import { createUser, fetchUsers, saveUsers } from "@/app/utils/actions";
import { NextRequest, NextResponse } from "next/server"; //2
// backend logic here
/*
export const GET = async (req: Request) => {
  // access to req by default
  const { searchParams } = new URL(req.url);
  const id = new URL(req.url).searchParams.get("id");
  console.log(req.url, searchParams);

  const users = await fetchUsers(); // backend logic here
  return Response.json({ users: users, msg: "api route - GET" });
};*/

//2
// backend logic here
export const GET = async (req: NextRequest) => {
  // access to req by default
  console.log(req.url, req.nextUrl); // nextUrl is like the new URL(req.url) object

  const users = await fetchUsers(); // backend logic here
  return NextResponse.redirect(new URL("/", req.url));
};

// backend logic here
export const POST = async (request: Request) => {
  const data = await request.json();
  const formdata = new FormData();
  for (let [chave, valor] of Object.entries(data)) {
    formdata.append(chave, data[chave]);
  }
  await createUser(null, formdata);
  const users = await fetchUsers(); // backend logic here
  return Response.json({ users: users, msg: "api route - Post" });
};

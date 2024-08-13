//import { NextResponse } from "next/server";
/*
export function middleware(request: Request) {
  console.log("middleware");
  return Response.json({ msg: "Middleware" });
}*/
/*
export function middleware(request: Request) {
  console.log("middleware", request.url);
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  // doesnt affect the nested routes
  //matcher: "/about",
  matcher: ["/about/:path*", "/tours/:path*"], //nested routes
};*/

export function middleware() {
  console.log("Middleware");
}

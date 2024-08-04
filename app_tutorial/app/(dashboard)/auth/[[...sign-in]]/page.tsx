import React from "react";

function page({ params }: { params: { "sign-in": string[] } }) {
  console.log(params);
  console.log(params["sign-in"][0]);

  return <div>Sign In - params: {params["sign-in"] || "no param"}</div>;
}

export default page;

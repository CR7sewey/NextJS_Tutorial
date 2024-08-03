"use client";
function error({ error }: { error: Error }) {
  return <div className="text-xl capitalize">there was an error...</div>;
}
export default error;

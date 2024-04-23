import React from "react";

export const Title = () => {
  console.log("re rendering...");
  return (
    <div className="row g-2">
      <div className="col mt-5 text-center">
        <h1>Not to do list</h1>
      </div>
    </div>
  );
};

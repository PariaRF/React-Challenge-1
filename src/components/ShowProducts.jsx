import React from "react";

function ShowProducts({ onClick }) {
  return (
    <>
      <h1 className="text-3xl text-gray-500 text-right">لیست پروژه ها</h1>
      <button
        onClick={onClick}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-24"
      >
        نشان دادن پروژه ها
      </button>
    </>
  );
}

export default ShowProducts;

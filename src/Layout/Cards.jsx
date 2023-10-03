import React from "react";
import Rating from "./Rating";

function Cards({ title, catagory, rating, price, linkImage }) {
  return (
    <div className="bg-white drop-shadow-md overflow-hidden my-4 mr-2">
      <img
        src={linkImage}
        alt="fish Product"
        className="h-40 w-full object-cover"
      />
      <div className="p-5">
        <h1 className="py-2 truncate">{title}</h1>
        <Rating rating={rating} />
      </div>
      <h3 className="p-5 text-xl bottom-0">{price}</h3>
      <div className="absolute top-0  bg-white m-3 -px-2 py-[2.5px] rounded font-bold">
        {catagory}
      </div>
    </div>
  );
}

export default Cards;

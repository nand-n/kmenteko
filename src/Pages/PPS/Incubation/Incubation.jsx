import React, { useState } from "react";
import PPSIndex from "..";
import { BsCash } from "react-icons/bs";

function Incubation() {
  const [cage, setCage] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const items = {
    name: "A1-12",
    fish_type_duration: "1 month Nile Telapia",
    quantity: "1000",
    quality: "B Grade",
  };

  const handleAddCage = () => {
    setCage([...cage, items]);
  };
  const popUp = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const handleDelete = (index) => {
    const updatedCage = cage.filter((_, i) => i !== index);
    setCage(updatedCage);
  };
  return (
    <PPSIndex>
      <div className="overflow-x-auto h-full justify-center items-center container mx-auto ">
        <div className="grid grid-cols-4 justify-center">
          <div className="grid grid-cols-4 col-span-3 col-start gap-4 p-4">
            {cage?.map((item, index) => (
              <div className="col-span-1  w-full h-[285px] bg-green-500 rounded-xl">
                <div className="flex justify-between px-2 items-center relative">
                  <div className=""></div>
                  <button className={`text-white text-lg `} onClick={popUp}>
                    ...
                  </button>
                  {isPopupOpen && (
                    <button
                      onClick={() => handleDelete(index)}
                      className="absolute top-0 mt-2 bg-white text-black px-2 py-1 rounded shadow"
                    >
                      X
                    </button>
                  )}
                </div>

                <div className={` justify-center items-center `} key={index}>
                  <div className="flex justify-center mt-2">
                    <div className="h-20 w-20 rounded-full bg-white items-center flex justify-center " />
                  </div>
                  <div className="mt-4 text-white font-bold text-lg items-center flex justify-center">
                    #{item.name}
                  </div>
                  <div className="mt-4 flex justify-center items-center ">
                    <div className="pr-2 border-r border-gray-300 text-white text-xs font-normal ">
                      <div className="">Telapia</div>
                      {item.quality}
                    </div>
                    <div className="pl-3 text-white text-xs font-normal ">
                      <div className="">Fishs</div>
                      {item.quantity}
                    </div>
                  </div>
                  <div className="flex justify-center items-center p-4 mb-4">
                    <div className=" py-2 w-full h-50px bg-white rounded-lg text-pink-600 font-semibold text-sm flex justify-center items-center">
                      {" "}
                      {item.fish_type_duration}{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={handleAddCage}
              className="col-span-1 w-full h-[285px] bg-green-600 rounded-xl justify-center items-center grid"
            >
              <div className="flex justify-center mt-4">
                <div className="h-20 w-20 rounded-full bg-white items-center flex justify-center text-8xl text-blue-900 font-sans">
                  +
                </div>
              </div>
            </button>
          </div>

          <div className="col-span-1 col-start-4 justify-center">
            the second
          </div>
        </div>
      </div>
    </PPSIndex>
  );
}

export default Incubation;

import React from "react";
import PPSIndex from "..";

function Fishstage() {
  return (
    <PPSIndex>
      <div className="grid text-2xl justify-start items-start font-bold ">
        Stege of Fish
      </div>
      <div className="grid grid-cols-4 justify-start items-start">
        <div className="col-span-3 grid grid-cols-7 gap-2 p-4 items-center ">
          <div className="col-span-1 col-start-1 grid items-center justify-center">
            <div className="flex justify-center items-center">
              <div className="w-12 h-12 rounded-full flex-justify-center bg-gray-200" />
            </div>
            <div className="flex-justify-center items-center text-sm font-semibold px-2 py-1 mt-2 bg-blue-600 rounded text-white">
              Feltirized Egg
            </div>
          </div>
          <div className="col-span-1 col-start-2 grid items-center justify-center">
            <div className="flex justify-center items-center">
              <div className="w-12 h-12 rounded-full flex-justify-center bg-gray-200" />
            </div>
            <div className="flex-justify-center text-sm font-semibold px-2 py-1 mt-2 bg-blue-600 rounded text-white">
              Larvae
            </div>
          </div>
          <div className="col-span-1 col-start-3 grid items-center justify-center">
            <div className="flex justify-center items-center">
              <div className="w-12 h-12 rounded-full flex-justify-center bg-gray-200" />
            </div>
            <div className="flex justify-center text-sm font-semibold px-2 py-1 mt-2 bg-blue-600 rounded text-white">
              Fry
            </div>
          </div>
          <div className="col-span-1 col-start-4 grid items-center justify-center">
            <div className="flex justify-center items-center">
              <div className="w-12 h-12 rounded-full flex-justify-center bg-gray-200" />
            </div>
            <div className="flex-justify-center text-sm font-semibold px-2 py-1 mt-2 bg-blue-600 rounded text-white">
              Fingerling
            </div>
          </div>
          <div className="col-span-1 col-start-5 grid items-center justify-center">
            <div className="flex justify-center items-center">
              <div className="w-12 h-12 rounded-full flex-justify-center bg-gray-200" />
            </div>
            <div className="flex justify-center text-sm font-semibold px-2 py-1 mt-2 bg-blue-600 rounded text-white">
              juvenile
            </div>
          </div>
          <div className="col-span-1 col-start-6 grid items-center justify-center">
            <div className="flex justify-center items-center">
              <div className="w-12 h-12 rounded-full flex-justify-center bg-gray-200" />
            </div>
            <div className="flex-justify-center text-sm font-semibold px-2 py-1 mt-2 bg-blue-600 rounded text-white">
              Adult
            </div>
          </div>
          <div className="col-span-1 col-start-7 grid items-center justify-center">
            <div className="flex justify-center items-center">
              <div className="w-12 h-12 rounded-full flex-justify-center bg-gray-200" />
            </div>
            <div className="flex-justify-center text-sm font-semibold px-2 py-1 mt-2 bg-blue-600 text-white rounded">
              Processed
            </div>
          </div>
          <div className="grid mt-8 gap-y-2 ml-4">
            <div className="text-1xl font-bold">1.Fertilized Egg</div>
            <div className="text-1xl font-bold">2.Larvae</div>
            <div className="text-1xl font-bold">3.Fry</div>
            <div className="text-1xl font-bold">4.Fingerling</div>
            <div className="text-1xl font-bold">5.juvenile</div>
            <div className="text-1xl font-bold">6.Adult</div>
            <div className="text-1xl font-bold">7.Processed</div>
          </div>
        </div>
        <div className="col-span-1 col-start-4 ">
          Some fish market may choose to offer discounts or special on Tuesdays
          to attract more customers , which could also contribute to and
          increase in sales on that day. Another Possiblity is that Tuesday is
          simply a convinient day for a customers to shop for sea food , as
          falls in the middle of the week and may be a less busy day for other
          errands and activities. Ultemately , the specific reasons for an
          increase in the fish marketon Tuesdays may vary depending on the
          location , market trends and other factors and would require further.
        </div>
      </div>
    </PPSIndex>
  );
}

export default Fishstage;

import React from "react";
import { MdChevronRight } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
const FaqAccordion = ({ title, children, subtitle, Id, Index, setIndex }) => {
  const handleSetIndex = (Id) => Index !== Id && setIndex(Id);
  const handleSetClose = (Id) => Index === Id && setIndex(false);
  console.log(handleSetIndex, "handleSetIndex");
  return (
    <>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="grid mb-0"
      >
        <>
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              class="bg-[#FFF] flex items-center  w-full p-4 font-medium text-left text-gray-500 border border border-gray-200 "
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => handleSetIndex(Id)}
            >
              {Index === Id ? (
                <BiChevronDown
                  className="text-2xl text-primary"
                  onClick={() => handleSetClose(Id)}
                />
              ) : (
                <MdChevronRight className="text-2xl text-primary" />
              )}
              <div className="grid ">
                <span className="text-sm text-black ">{title}</span>
              </div>
            </button>
          </h2>
          {Index === Id && (
            <div
              id="accordion-collapse-body-1"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div class="p-5 font-light border  border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                {children}
              </div>
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default FaqAccordion;

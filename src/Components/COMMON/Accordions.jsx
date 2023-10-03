import React from "react";
import { MdChevronLeft, MdOutlineReadMore } from "react-icons/md";
const Accordions = ({ title, children, subtitle, Id, Index, setIndex }) => {
  const handleSetIndex = (Id) => Index !== Id && setIndex(Id);
  const handleSetClose = (Id) => Index === Id && setIndex(false);

  return (
    <>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="grid mb-3"
      >
        <>
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              class="bg-[#ECF2F7] flex items-center justify-between w-full p-4 font-medium text-left text-gray-500 border border border-gray-200 "
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
              onClick={() => handleSetIndex(Id)}
            >
              <div className="grid">
                <span className="text-md text-[#0F3A62]">{title}</span>
                <div className="flex gap-1">
                  {subtitle !== undefined ? (
                    <>
                      <span className="text-xs">Manager:</span>
                      <span className="text-xs text-[#1C1F1B]">{subtitle}</span>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {Index === Id ? (
                <MdChevronLeft
                  className="text-2xl text-primary"
                  onClick={() => handleSetClose(Id)}
                />
              ) : (
                <MdOutlineReadMore className="text-2xl text-primary" />
              )}
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

export default Accordions;

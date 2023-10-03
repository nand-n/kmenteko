import { useState } from "react";
import { MdOutlineReadMore } from "react-icons/md";

export default function KeyResultContainer({ data }) {
  const [showMore, setShowMore] = useState(false);
  const [showProgress, setShowProgress] = useState(true);

  const defineClassName = (percentage, parent) => {
    if ((parent = "okr")) {
      const className =
        percentage <= 35
          ? `bg-[#A10F0F]  w-20 text-center p-3 text-white text-[22px] h-[57px] -my-[1px] -mx-[1px]`
          : percentage <= 65
          ? "bg-[#9EA10F]  w-20 text-center p-3 text-white text-[22px] h-[57px] -my-[1px] -mx-[1px]"
          : percentage > 65
          ? "bg-[#0FA16D]  w-20 text-center p-3 text-white text-[22px] h-[57px] -my-[1px] -mx-[1px]"
          : "";
      return className;
    } else if ((parent = "keyResult")) {
      const className =
        percentage <= 35
          ? `border-t-4 border-[#A10F0F] rounded-full -my-1`
          : percentage <= 65
          ? `border-t-4 border-[#9EA10F] rounded-full -my-1`
          : percentage > 65
          ? "border-t-4 border-[#0FA16D] rounded-full -my-1 "
          : "";
      return className;
    }
  };

  return (
    <div>
      {data?.map((okr) => (
        <div key={okr?.id} className="border-[1px] border-[#D1D1D1] m-4">
          <div
            key={okr?.id}
            className="bg-[#ECF2F7] flex justify-between h-14 border-b-[1px] border-[#D1D1D1]"
          >
            <span className="text-center text-[14px] p-4 text-primary">
              {okr?.name}
            </span>
            <div className="flex flex-col">
              {showProgress === true ? (
                <div
                  onMouseEnter={() => {
                    setShowMore(okr?.id);
                    setShowProgress(false);
                  }}
                  // onMouseLeave={() => {
                  //   setShowMore(false);
                  //   setShowProgress(okr?.id);
                  // }}
                  className={defineClassName(okr?.percentage, "okr")}
                >
                  {`${okr?.percentage}%`}
                </div>
              ) : (
                ""
              )}
              {showMore === okr?.id ? (
                <div
                  onMouseLeave={() => {
                    setShowMore(false);
                    setShowProgress(true);
                  }}
                  className="bg-[#0F3A62]/70 w-20  p-3 h-[57px] none -my-[1px] -mx-[1px] flex justify-center items-center cursor-auto"
                >
                  <MdOutlineReadMore
                    size="40px"
                    color="#fff"
                    className="cursor-auto"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          {okr?.keyresults?.map((keyResult) => (
            <div key={keyResult?.id} className="grid grid-cols-2">
              <span className="px-10 text-[12px] text-[#747474] py-2 col-span-1">
                {keyResult?.id}. {keyResult?.name}
              </span>
              <div className="flex col-span-1">
                <div className="flex flex-col py-4">
                  <div className="border-t-4 w-[350px] rounded-full"></div>
                  <div
                    className={
                      //   defineClassName(
                      //   keyResult?.percentage,
                      //   "keyResult"
                      // )
                      keyResult?.percentage <= 35
                        ? `border-t-4 border-[#A10F0F] rounded-full -my-1`
                        : keyResult?.percentage <= 65
                        ? `border-t-4 border-[#9EA10F] rounded-full -my-1`
                        : keyResult?.percentage > 65
                        ? "border-t-4 border-[#0FA16D] rounded-full -my-1 "
                        : ""
                    }
                    style={{ width: `${keyResult?.percentage * 3.5}px` }}
                  ></div>
                </div>
                <span
                  className={
                    keyResult?.percentage <= 35
                      ? "text-[#A10F0F] text-left py-2 px-4 text-[11px]"
                      : keyResult?.percentage <= 65
                      ? "text-[#9EA10F]  text-left py-2 px-4 text-[11px]"
                      : keyResult?.percentage > 65
                      ? "text-[#0FA16D]  text-left py-2  px-4 text-[11px]"
                      : ""
                  }
                >
                  {keyResult?.percentage} %
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

import React from "react";
import NoRecord from "../../COMMON/NoRecord";

export default function Representative(props) {
  return (
    <>
      {props?.detailData?.representatives !== null ? (
        <div className="grid grid-cols-12 gap-4">
          {props?.detailData?.representatives?.map((items) => (
            <div className="col-span-6">
              <div className="bg-[#ECF2F7]">
                <div className="flex flex-row gap-3 items-center p-5">
                  <div className="flex flex-col px-3">
                    <div className="text-sm">{items.name}</div>
                    <div className="text-xs">{items.email}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoRecord message={"Customer Representative Not Found "} />
      )}
    </>
  );
}

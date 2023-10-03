import React from "react";

export default function CircleProgress(props) {
  const poorRatingprogress =
    (props?.percentage === undefined
      ? 0
      : Math.round(props?.percentage) * 215) /
      100 +
    380;
  return (
    <div className="sessions-type">
      <div className="flex items-center">
        <svg style={{ width: "104px", height: "106px" }}>
          <circle className="sd-piecharts1" cx="55" cy="55" r="35"></circle>
          <circle
            className="sd-piecharts2"
            cx="55"
            cy="55"
            r="35"
            style={{ strokeDashoffset: poorRatingprogress }}
          ></circle>
          <text
            className="text-md"
            x="50%"
            y="53
            %"
            text-anchor="middle"
            stroke="#0F3A62"
            stroke-width="0.5px"
            dy=".3em"
          >
            {props?.percentage === undefined ? 0 : props?.percentage}%
          </text>
        </svg>
      </div>
    </div>
  );
}

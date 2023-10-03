import React from "react";
import KeyResultContainer from "./keyResultContainer";
import StatusBar from "./statusBar";

const OrganizationProgress = ({ data }) => {
  const objective = data && data?.length;
  const totalKeyResults = data && data?.map((data) => data?.keyresults.length);
  const okrScores = data && data?.map((data) => data?.percentage);

  const okrPercentage = Math.ceil(
    Math.round(
      (okrScores
        .filter((e) => typeof e == "number")
        .reduce((prev, acc) => prev + acc, 0) +
        Number.EPSILON) *
        100
    ) /
      100 /
      objective
  );

  const keyResults =
    Math.round(
      (totalKeyResults
        .filter((e) => typeof e == "number")
        .reduce((prev, acc) => prev + acc, 0) +
        Number.EPSILON) *
        100
    ) / 100;

  return (
    <div className="m-4">
      <StatusBar
        data={{
          objective,
          okrPercentage,
          keyResults,
        }}
      />
      <KeyResultContainer data={data} />
    </div>
  );
};

export default OrganizationProgress;

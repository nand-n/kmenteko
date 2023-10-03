import React from "react";

const Subscriptions = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h4>Subscriptions</h4>
        <select className="bg-transparent" name="Months" id="months">
          <option value="december">December</option>
        </select>
      </div>
      <div></div>
    </div>
  );
};

export default Subscriptions;

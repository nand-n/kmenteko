import React from "react";

const SettingsCard = ({ div, settings, handleSettings, team = false }) => {
  return (
    <div className="sticky top-2 flex flex-col mt-2">
      <div className="bg-[#ECF2F7] border px-4 py-4 items-center border-outline flex justify-between">
        <div className="flex flex-col">
          <h4 className="text-primary text-sm">Operations</h4>
        </div>
      </div>
      <div className="bg-surface border flex flex-col flex-wrap gap-2 border-outline py-6">
        <div className="flex gap-4 px-6 items-center">
          <img
            src="https://source.unsplash.com/80x80?face"
            alt="manager profile"
            className="h-16 w-16 rounded-full"
          />
          <div className="flex flex-col gap-1 w-full">
            <label className="text-sm text-[#A9ABA9]">Director</label>
            <input
              type="text"
              className="border bg-transparent focus:outline-none border-outline w-full h-10"
            />
          </div>
        </div>

        <hr className="mt-2" />
        <div className="w-full flex flex-col gap-1 px-6 py-4">
          <label htmlFor="parent" className="text-primary text-sm">
            Parent
          </label>
          <select className="h-12 border text-sm focus:outline-none border-outline bg-transparent">
            <option>CEO</option>
          </select>
        </div>

        {team ? null : (
          <div className="w-full flex flex-col gap-1 px-6">
            <label htmlFor="parent" className="text-primary text-sm">
              Departments
            </label>
            <input
              type="text"
              className="border bg-transparent focus:outline-none border-outline w-full h-10"
            />
            <select className="h-12 border mt-2 text-sm focus:outline-none border-outline bg-transparent">
              <option>Add New</option>
            </select>
          </div>
        )}

        <div className="flex px-6 mt-4 items-start">
          <button className="px-8 bg-[#0F3A62] py-2 text-sm text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsCard;

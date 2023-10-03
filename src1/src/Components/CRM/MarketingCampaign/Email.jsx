import React from "react";

export default function Email() {
  return (
    <div className="grid gap-5 px-6">
      <div className="hover:bg-[#ECF2F7] bg-[#F5FAFD] px-4 py-5 cursor-pointer">
        <div className="text-[#0F3A62]  text-sm font-semibold">
          Project Launch Template
        </div>
        <div className="text-xs">
          Est aliquam quidem et blanditiis magnam sit qui p laceat. Porro et
          pariatur molestiae adipisci vel et. Eum reprehenderit ut laudantium
          ad. Et assumenda occaecati veniam.
        </div>
      </div>
      <div className="hover:bg-[#ECF2F7] bg-[#F5FAFD] px-4 py-5 cursor-pointer">
        <div className="text-[#0F3A62]  text-sm font-semibold">
          Follow Up 1 Template
        </div>
        <div className="text-xs">
          Est aliquam quidem et blanditiis magnam sit qui p laceat. Porro et
          pariatur molestiae adipisci vel et. Eum reprehenderit ut laudantium
          ad. Et assumenda occaecati veniam.
        </div>
      </div>
      <div className="flex items-center py-3 text-[#0F3A62]">
        <button
          type="submit"
          class="text-[#fff] bg-[#0F3A62] hover:bg-[#06223d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal text-[#0F3A62]  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Use Template
        </button>
      </div>
    </div>
  );
}

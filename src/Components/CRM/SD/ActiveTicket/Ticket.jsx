import React, { useState } from "react";
import PostMortem from "./PostMortem";

export default function Ticket() {
  const [modal, setModal] = useState(false);
  const HandleModal = () => {
    setModal(true);
  };
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="w-full inline-block align-middle">
          <div className="overflow-hidden border">
            <div className="min-w-full divide-y">
              <div className="bg-gray-50 flex justify-between py-2 px-5">
                <div className=" text-[#0F3A62]  font-Open-sans">
                  Ticket Title : Voluptate velit eum quae aut eligendi omnis
                </div>
                <button
                  className="flex-initial rounded-lg text-xs text-[#ECF2F7] bg-[#0FA16D] hover:bg-[#09744e] px-5 py-2 w-35"
                  onClick={HandleModal}
                >
                  Close Ticket
                </button>
              </div>

              <div className="grid gap-5 px-6 py-6">
                <div className="text-xs text-[#747474]">
                  Hic nam modi laboriosam quo ex nam amet occaecati
                  exercitationem. Qui sunt dolores laborum beatae odit tenetur
                  ut placeat nemo. Necessitatibus ut harum molestiae maiores
                  quia quo tempora. Ipsum quasi vel. Porro inventore quo commodi
                  et est vel. Commodi quia ea ut. Qui dolorem atque. Architecto
                  qui et aperiam ab deleniti voluptate. Modi nam ullam
                  consectetur. Voluptates vero praesentium voluptatem qui
                  repellendus. Unde ut eum.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal ? <PostMortem setModal={setModal} /> : ""}
    </div>
  );
}

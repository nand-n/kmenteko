import React, { useState } from "react";
import FaqAccordion from "../../../COMMON/FaqAccordion";

export default function Faqs() {
  const [Index, setIndex] = useState(false);
  const data = [
    {
      id: 1,
      Name: "Repellat at ratione necessitatibus voluptatum.",
      solution:
        "Alias nostrum cupiditate omnis delectus enim cumque ipsam nemo. Deleniti consequuntur iure culpa error voluptatem quod ut voluptas. Dolore iure fuga deserunt et asperiores praesentium eos quidem. Inventore veniam nobis quia non est debitis at repudiandae commodi. Similique eum deleniti et magni reiciendis ipsa.Ipsum iste in nihil  in voluptatem nulla autem explicabo praesentium. Expedita ex quae in libero laudantium blanditiis. Sit doloribus quis ducimus molestias est error quisquam.   Accusamus nesciunt eos. Est dolor assumenda sint laborum ut nobis itaque. Aut illo velit suscipit. Cumque optio est quam sunt. Consequatur dolore deleniti.",
      keywords: [{ name: "power" }, { name: "cable" }, { name: "battery" }],
      post_by: "Nati Taye",
    },
    {
      id: 2,
      Name: "Repellat at ratione necessitatibus voluptatum.",
      solution:
        "Alias nostrum cupiditate omnis delectus enim cumque ipsam nemo. Deleniti consequuntur iure culpa error voluptatem quod ut voluptas. Dolore iure fuga deserunt et asperiores praesentium eos quidem. Inventore veniam nobis quia non est debitis at repudiandae commodi. Similique eum deleniti et magni reiciendis ipsa.Ipsum iste in nihil  in voluptatem nulla autem explicabo praesentium. Expedita ex quae in libero laudantium blanditiis. Sit doloribus quis ducimus molestias est error quisquam.   Accusamus nesciunt eos. Est dolor assumenda sint laborum ut nobis itaque. Aut illo velit suscipit. Cumque optio est quam sunt. Consequatur dolore deleniti.",
      keywords: [{ name: "power" }, { name: "cable" }, { name: "battery" }],
      post_by: "Nati Taye",
    },
    {
      id: 3,
      Name: "Repellat at ratione necessitatibus voluptatum.",
      solution:
        "Alias nostrum cupiditate omnis delectus enim cumque ipsam nemo. Deleniti consequuntur iure culpa error voluptatem quod ut voluptas. Dolore iure fuga deserunt et asperiores praesentium eos quidem. Inventore veniam nobis quia non est debitis at repudiandae commodi. Similique eum deleniti et magni reiciendis ipsa.Ipsum iste in nihil  in voluptatem nulla autem explicabo praesentium. Expedita ex quae in libero laudantium blanditiis. Sit doloribus quis ducimus molestias est error quisquam.   Accusamus nesciunt eos. Est dolor assumenda sint laborum ut nobis itaque. Aut illo velit suscipit. Cumque optio est quam sunt. Consequatur dolore deleniti.",
      keywords: [{ name: "zemen" }, { name: "aaaa" }, { name: "battery" }],
      post_by: "Nati Taye",
    },
  ];
  return (
    <div>
      {" "}
      {data.map((data) => (
        <FaqAccordion
          title={data.Name}
          subtitle={data.Manager}
          Id={data.id}
          children={data.answer}
          Index={Index}
          setIndex={setIndex}
        >
          <div className="pl-[71px] grid gap-3">
            <div className="grid gap-2">
              <div className="text-sm text-[#0F3A62] font-bold">solution</div>
              <div className="text-xs text-[#747474]">{data?.solution}</div>
            </div>
            <div className="grid gap-2">
              <div className="text-sm text-[#0F3A62] font-bold">keyword</div>
              <div className="flex gap-3">
                {data?.keywords.map((items) => (
                  <div className="bg-[#96DAFF] py-[4px] px-[10px] text-xs rounded-lg">
                    {items?.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-2">
              <div className="text-sm text-[#0F3A62] font-bold">Posted By</div>
              <div className="text-xs text-[#747474]">{data?.post_by}</div>
            </div>
          </div>
        </FaqAccordion>
      ))}
    </div>
  );
}

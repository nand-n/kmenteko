import { useState } from "react";
import CircleProgress from "../../COMMON/CircleProgress";

const StatusBar = ({ data }) => {
  const initialValue = {};
  const [QuarterDate, setQuarterDate] = useState(initialValue);

  // Finale date of the quarter
  const QuarterEndDate = new Date("Mar 14, 2023 04:51:52").getTime();

  // Run countDown every second
  const countDown = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = QuarterEndDate - now;

    // Calculating the days, hours, minutes and seconds left
    let days =
      Math.floor(timeLeft / (1000 * 60 * 60 * 24)) < 10
        ? `0${Math.floor(timeLeft / (1000 * 60 * 60 * 24))}`
        : Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let weeks =
      Math.ceil(days / 7) < 10
        ? `0${Math.ceil(days / 7)}`
        : Math.ceil(days / 7);
    let hours =
      Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 10
        ? `0${Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          )}`
        : Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes =
      Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)) < 10
        ? `0${Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))}`
        : Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds =
      Math.floor((timeLeft % (1000 * 60)) / 1000) < 10
        ? `0${Math.floor((timeLeft % (1000 * 60)) / 1000)}`
        : Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the message when countdown is over
    if (timeLeft < 0) {
      clearInterval(countDown);
    }
    setQuarterDate({ days, weeks, hours, minutes, seconds });
  }, 1000);

  return (
    <div className="grid gap-4 grid-cols-12  m-4 pt-4">
      <div className="bg-[#F5FAFD] h-[120px] col-span-2 flex flex-col p-6">
        <span className="text-primary font-normal text-[32px]">
          {data?.objective}
        </span>
        <span className="text-[#A9ABA9] text-[12px]">Number Cages</span>
      </div>
      <div className="bg-[#F5FAFD] h-[120px] col-span-2 flex flex-col p-6">
        <span className="text-primary font-normal text-[32px]">
          {data?.keyResults}
        </span>
        <span className="text-[#A9ABA9] text-[12px]">Workers</span>
      </div>
      <div className="bg-[#F5FAFD] h-[120px] col-span-3 flex justify-between items-center p-6">
        <span className="text-[#A9ABA9] text-[12px]">Progress</span>

        <CircleProgress percentage={data?.okrPercentage} />
      </div>
      <div className="bg-[#F5FAFD] h-[120px] col-span-5 flex justify-around p-6">
        <div className="flex flex-col">
          <span className="text-primary font-normal text-[32px]">
            {QuarterDate?.weeks}
          </span>
          <span className="text-[#A9ABA9] text-[12px] px-[5px]">weeks</span>
        </div>
        <div className="flex flex-col">
          <span className="text-primary font-normal text-[32px]">
            {QuarterDate?.days}
          </span>
          <span className="text-[#A9ABA9] text-[12px] px-[5px]">days</span>
        </div>
        <div className="flex flex-col">
          <span className="text-primary font-normal text-[32px]">
            {QuarterDate?.hours}
          </span>
          <span className="text-[#A9ABA9] text-[12px] px-[5px]">hours</span>
        </div>
        <div className="flex flex-col">
          <span className="text-primary font-normal text-[32px]">
            {QuarterDate?.minutes}
          </span>
          <span className="text-[#A9ABA9] text-[12px]">minutes</span>
        </div>
        <div className="flex flex-col">
          <span className="text-primary font-normal text-[32px]">
            {QuarterDate?.seconds}
          </span>
          <span className="text-[#A9ABA9] text-[12px]">seconds</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;

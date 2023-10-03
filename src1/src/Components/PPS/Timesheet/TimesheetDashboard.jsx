import InfoCard from "./InfoCard";
import TaskCard from "./TaskCard";

const TimesheetDashboard = ({ handleDetail }) => {
  return (
    <div className="px-8 py-8 flex flex-col">
      <div className="flex gap-2">
        <button className="px-6 bg-[#0F3A62] py-2 text-sm text-white">
          Sign In
        </button>
      </div>

      <div className="mt-4 flex flex-col">
        <div className="flex gap-4">
          <div className="flex-1 flex items-center justify-center gap-2 bg-[#F5FAFD]">
            <div>
              <img
                src="https://source.unsplash.com/80x80?face"
                alt="Abraham Dulla"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-sm text-black100">Abraham Dulla</h5>
              <p className="text-[12px] text-[#A9ABA9]">Digital Marketer</p>
            </div>
          </div>
          <InfoCard
            type="success"
            title="158 hours"
            description="Total working hour"
          />
          <InfoCard type="error" title="2 Days" description="Absenteeism" />
          <InfoCard type="warning" title="3 Days" description="Late" />
          <InfoCard
            type="info"
            title="3 Days"
            description="Available paid Leave"
          />
        </div>
        <div className="mt-6">
          <h4 className="text-primary border-b-2 px-2 w-fit py-1 border-b-primary text-sm font-medium">
            Pending Tasks
          </h4>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </div>
  );
};

export default TimesheetDashboard;

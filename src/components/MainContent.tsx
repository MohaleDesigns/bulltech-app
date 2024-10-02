import StatsBox from "./StatsBox";
import { MdWorkOutline } from "react-icons/md";
import { IoIosMale } from "react-icons/io";
import { BsGenderFemale } from "react-icons/bs";
import EventCard from "./EventCard";
import BarChart from "./BarChart";
import { Chart, registerables } from "chart.js";
import User1 from "../assets/images.jpeg";
import User2 from "../assets/user2.jpg";
import User3 from "../assets/user3.jpeg";
Chart.register(...registerables);

interface Props {
  employees: any;
}

function MainContent({ employees }: Props) {
  return (
    <div className="flex flex-col w-full p-[10px] gap-3">
      <div className="flex flex-col gap-2 md:grid md:grid-cols-3 md:gap-3">
        <StatsBox
          label="Total Employees"
          number={employees?.length}
          icon={<MdWorkOutline size="24px" color="#93C23D" />}
        />
        <StatsBox
          label="Male Employees"
          number={2}
          icon={<BsGenderFemale size="24px" color="#93C23D" />}
        />
        <StatsBox
          label="Male Employees"
          number={8}
          icon={<IoIosMale size="24px" color="#93C23D" />}
        />
      </div>

      <div className="flex flex-col gap-2 lg:grid lg:grid-cols-3 lg:gap-3">
        <div className="flex flex-col gap-2 bg-lightGrey/15 shadow-black/10 shadow-lg rounded-md p-3 col-span-2">
          <h4 className="font-overpass font-semibold text-[20px] mb-[10px]">
            Stats
          </h4>

          {/* Diagrams */}
          <BarChart employees={employees} />
        </div>

        <div className="flex flex-col gap-2 bg-lightGrey/15 shadow-black/10 shadow-lg rounded-md p-3">
          <h4 className="font-overpass font-semibold text-[20px] mb-[10px]">
            This Month
          </h4>

          <div className="flex flex-col gap-3">
            <EventCard
              name={"Jeremy"}
              reason={"Not feeling well"}
              date={"1 - 31 October"}
              image={User1}
            />
            <EventCard
              name={"Kabelo"}
              reason={"Vacation"}
              date={"1 - 11 October"}
              image={User2}
            />
            <EventCard
              name={"Dalton"}
              reason={"Family Trip"}
              date={"1 - 4 October"}
              image={User3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

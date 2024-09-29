import Header from "./Header";
import StatsBox from "./StatsBox";
import { MdWorkOutline } from "react-icons/md";
import { IoIosMale } from "react-icons/io";
import { BsGenderFemale } from "react-icons/bs";

function MainContent() {
  return (
    <div className="flex flex-col w-full p-[10px] gap-[50px]">
      <Header />

      <div className="flex flex-col gap-2 sm:grid sm:grid-cols-3 sm:gap-3">
        <StatsBox
          label="Total Employees"
          number={300}
          icon={<MdWorkOutline size="24px" color="#93C23D" />}
        />
        <StatsBox
          label="Female Employees"
          number={200}
          icon={<BsGenderFemale size="24px" color="#93C23D" />}
        />
        <StatsBox
          label="Male Employees"
          number={100}
          icon={<IoIosMale size="24px" color="#93C23D" />}
        />
      </div>
    </div>
  );
}

export default MainContent;

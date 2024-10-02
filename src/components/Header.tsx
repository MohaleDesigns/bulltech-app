import { CiMenuBurger } from "react-icons/ci";

interface Props {
  setMobileMenu: any;
  mobileMenu: boolean;
}

function Header({ setMobileMenu, mobileMenu }: Props) {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const user = `${storedUser?.name} ${storedUser?.surname}`;
  const date = new Date();

  const initials = user
    .split(" ")
    .map((name) => name[0])
    .join("");

  const day = getDay(date);
  const month = getMonth(date);

  return (
    <div className="flex items-center justify-between">
      <div className="hidden sm:block">
        <h4 className="font-overpass font-semibold text-[20px] -mb-[10px] capitalize">
          Hello {user}
        </h4>
        <p className="font-lato font-normal text-[15px] text-darkGrey">{`${day}, ${month} ${date.getDate()}`}</p>
      </div>
      <div className="flex items-center gap-[10px] w-full sm:w-auto justify-between sm:justify-end">
        <div className="h-[40px] w-[40px] rounded-full bg-[#93C23D] py-[5px] border border-[#A5FF00] flex items-center justify-center">
          <p className="text-white font-overpass font-bold text-[15px] uppercase m-auto">
            {initials}
          </p>
        </div>
        <CiMenuBurger
          size="24px"
          color="#5F5F5F"
          className="sm:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      </div>
    </div>
  );
}

export default Header;

function getDay(date: Date) {
  switch (date.getDay()) {
    case 0:
      {
        return "Sunday";
      }
      break;
    case 1:
      {
        return "Monday";
      }
      break;
    case 2:
      {
        return "Tuesday";
      }
      break;
    case 3:
      {
        return "Wednesday";
      }
      break;
    case 4:
      {
        return "Thursday";
      }
      break;
    case 5:
      {
        return "Friday";
      }
      break;
    case 6:
      {
        return "Saturday";
      }
      break;
  }
}

function getMonth(date: Date) {
  switch (date.getMonth()) {
    case 0:
      {
        return "January";
      }
      break;
    case 1:
      {
        return "February";
      }
      break;
    case 2:
      {
        return "March";
      }
      break;
    case 3:
      {
        return "April";
      }
      break;
    case 4:
      {
        return "May";
      }
      break;
    case 5:
      {
        return "June";
      }
      break;
    case 6:
      {
        return "July";
      }
      break;
    case 7:
      {
        return "August";
      }
      break;
    case 8:
      {
        return "September";
      }
      break;
    case 9:
      {
        return "October";
      }
      break;
    case 10:
      {
        return "November";
      }
      break;
    case 11:
      {
        return "December";
      }
      break;
  }
}

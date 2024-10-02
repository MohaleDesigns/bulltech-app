import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import SidePanel from "../components/SidePanel";
import MainContent from "../components/MainContent";
import Header from "../components/Header";
import { MdOutlineDashboard, MdOutlinePeopleAlt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineNotificationsNone } from "react-icons/md";
import Employees from "./Employees";
import Notifications from "./Notifications";
import Support from "./Support";
import { BiSupport } from "react-icons/bi";
import Settings from "./Settings";
import { BiLogOut } from "react-icons/bi";
import { RiCloseLargeFill } from "react-icons/ri";
import SidePanelButton from "../components/SidePanelButton";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("dashbord");
  const [employees, setEmployees] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  async function getData() {
    // const url = "https://randomuser.me/api/?results=5000";
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setEmployees(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
    console.log("1: ", employees);
  }, []);

  const DisplayTab = () => {
    switch (activeTab) {
      case "dashbord":
        return <MainContent employees={employees} />;
      case "employees":
        return <Employees employees={employees} />;
      case "notifications":
        return <Notifications />;
      case "support":
        return <Support />;
      case "settings":
        return <Settings />;
      default:
        break;
    }
  };

  return (
    <>
      {mobileMenu ? (
        <div className="flex flex-col gap-[50px] h-screen p-[10px]">
          <div className="flex items-center justify-between">
            <img src={Logo} alt="logo" className="w-[150px]" />
            <RiCloseLargeFill
              size="24px"
              color="red"
              className="sm:hidden"
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          </div>

          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col gap-[10px]">
              <SidePanelButton
                label="Dashboard"
                icon={<MdOutlineDashboard size="24px" color="#5F5F5F" />}
                active={activeTab === "dashbord" ? true : false}
                onClick={() => {
                  setActiveTab("dashbord");
                  setMobileMenu(!mobileMenu);
                }}
              />
              <SidePanelButton
                label="Employees"
                icon={<MdOutlinePeopleAlt size="24px" color="#5F5F5F" />}
                active={activeTab === "employees" ? true : false}
                onClick={() => {
                  setActiveTab("employees");
                  setMobileMenu(!mobileMenu);
                }}
              />
              <SidePanelButton
                label="Notifications"
                icon={
                  <MdOutlineNotificationsNone size="24px" color="#5F5F5F" />
                }
                active={activeTab === "notifications" ? true : false}
                onClick={() => {
                  setActiveTab("notifications");
                  setMobileMenu(!mobileMenu);
                }}
              />
              <SidePanelButton
                label="Support"
                icon={<BiSupport size="24px" color="#5F5F5F" />}
                active={activeTab === "support" ? true : false}
                onClick={() => {
                  setActiveTab("support");
                  setMobileMenu(!mobileMenu);
                }}
              />
              <SidePanelButton
                label="Settings"
                icon={<IoSettingsOutline size="24px" color="#5F5F5F" />}
                active={activeTab === "settings" ? true : false}
                onClick={() => {
                  setActiveTab("settings");
                  setMobileMenu(!mobileMenu);
                }}
              />
            </div>

            <PrimaryButton
              label="Logout"
              icon={<BiLogOut size="24px" color="white" />}
              onClick={handleLogout}
            />
          </div>
        </div>
      ) : (
        <div className="flex gap-2 container mx-auto h-screen">
          <div className="hidden sm:block">
            <SidePanel activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="flex flex-col w-full p-[10px] gap-[50px]">
            <Header setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
            {DisplayTab()}
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;

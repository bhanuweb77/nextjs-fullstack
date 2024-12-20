import { useState } from "react";
import { VscFileSymlinkDirectory } from "react-icons/vsc";
import { AiOutlineQrcode, AiFillAppstore, AiOutlineAppstore } from "react-icons/ai";
import { MdMenuOpen } from "react-icons/md";
import Image from "next/image"; // Assuming you're using Next.js for Image handling
import logo from "../public/Images/image.png"; // Update with the correct logo path
import Menu from "./Menu";
import DataModule from "./DataModule";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("menu"); // Default active tab
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to toggle sidebar

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };
  // Function to dynamically render content based on the activeTab state
  const renderContent = () => {
    if (activeTab === "systems") {
      return <div></div>;
    } else if (activeTab === "system-code") {
      return <div></div>;
    } else if (activeTab === "properties") {
      return <div>
        {/* <DataModule/> */}
      </div>;
    } else if (activeTab === "menu") {
      return <div>
        <Menu/>
      </div>;
    }
    return <div>Select a tab to view its content</div>;
  };

  return (
    <div className="w-full h-[100vh] min-h-[calc(100vh-120px)] md:flex  bg-white">
      {/* Sidebar */}
      {/* <div className="lg:grid grid-cols-[285px,1fr]"> */}
      
      <aside className="bg-black min-h-full w-full max-w-60 fixed overflow-x-hidden overflow-y-auto hidden lg:block  rounded-xl">
        <div className="h-12 flex justify-center items-center flex-col">
          <div className="w-full flex justify-between items-center px-8">
            <Image src={logo} alt="Logo" className="w-23 h-12" />
            <span className="text-3xl font-bold">
              <MdMenuOpen className="text-white" />
            </span>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="p-4">
          <ul>
            {/* Systems Tab */}
            <li
              className={`w-full p-1 mb-1 text-lg flex items-center justify-between ${
                activeTab === "systems"
                  ? "bg-[#adf05b] rounded-lg"
                  : "hover:bg-[#adf05b] hover:rounded-lg"
              } group cursor-pointer`}
              onClick={() => setActiveTab("systems")}
            >
              <div className="px-2 flex items-center gap-4">
                <VscFileSymlinkDirectory
                  className={`text-2xl fill-white stroke-white ${
                    activeTab === "systems"
                      ? "fill-black"
                      : "group-hover:fill-black"
                  }`}
                />
                <span
                  className={`text-white text-lg tracking-wider font-normal ${
                    activeTab === "systems"
                      ? "text-black"
                      : "group-hover:text-black"
                  }`}
                >
                  Systems
                </span>
              </div>
            </li>

            {/* System Code Tab */}
            <li
              className={`w-full p-1 mb-1 text-lg flex items-center justify-between ${
                activeTab === "system-code"
                  ? "bg-[#adf05b] rounded-lg"
                  : "hover:bg-[#adf05b] hover:rounded-lg"
              } group cursor-pointer`}
              onClick={() => setActiveTab("system-code")}
            >
              <div className="px-2 flex items-center gap-4">
                <AiOutlineQrcode
                  className={`text-2xl fill-white stroke-white ${
                    activeTab === "system-code"
                      ? "fill-black"
                      : "group-hover:fill-black"
                  }`}
                />
                <span
                  className={`text-white text-lg tracking-wider font-normal ${
                    activeTab === "system-code"
                      ? "text-black"
                      : "group-hover:text-black"
                  }`}
                >
                  System Code
                </span>
              </div>
            </li>

            {/* Properties Tab */}
            <li
              className={`w-full p-1 mb-1 text-lg flex items-center justify-between ${
                activeTab === "properties"
                  ? "bg-[#adf05b] rounded-lg"
                  : "hover:bg-[#adf05b] hover:rounded-lg"
              } group cursor-pointer`}
              onClick={() => setActiveTab("properties")}
            >
              <div className="px-2 flex items-center gap-4">
                <AiFillAppstore
                  className={`text-2xl fill-white stroke-white ${
                    activeTab === "properties"
                      ? "fill-black"
                      : "group-hover:fill-black"
                  }`}
                />
                <span
                  className={`text-white text-lg tracking-wider font-normal ${
                    activeTab === "properties"
                      ? "text-black"
                      : "group-hover:text-black"
                  }`}
                >
                  Properties
                </span>
              </div>
            </li>

            {/* Menus Tab */}
            <li
              className={`w-full p-1 mb-1 text-lg flex items-center justify-between ${
                activeTab === "menu"
                  ? "bg-[#adf05b] rounded-lg"
                  : "hover:bg-[#adf05b] hover:rounded-lg"
              } group cursor-pointer`}
              onClick={() => setActiveTab("menu")}
            >
              <div className="px-2 flex items-center gap-4">
                <AiOutlineAppstore
                  className={`text-2xl fill-white stroke-white ${
                    activeTab === "menu"
                      ? "fill-black"
                      : "group-hover:fill-black"
                  }`}
                />
                <span
                  className={`text-white text-lg tracking-wider font-normal ${
                    activeTab === "menu"
                      ? "text-black"
                      : "group-hover:text-black"
                  }`}
                >
                  Menus
                </span>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      {/* Content Area */}
      <div className="w-full lg:ml-[12%] flex-1  px-4 overflow-x-hidden ">
        <div className="w-full h-auto bg-white  overflow-x-hidden">
          {renderContent()}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Sidebar;

import { useState, useEffect, useRef } from "react";
import {
  FaUser,
  FaCog,
  FaQuestion,
  FaQuestionCircle,
  FaTwitter,
  FaTelegramPlane,
  FaBook,
  FaYoutube,
  FaDiscord,
  FaBars,
  FaTimes,
  FaHome,
  FaNewspaper,
  FaPlusCircle,
  FaLock,
  FaChartBar,
  FaTrophy,
} from "react-icons/fa";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRefs = {
    Home: useRef(null),
    Create: useRef(null),
    Dashboard: useRef(null),
    User: useRef(null),
    Settings: useRef(null),
    Help: useRef(null),
    More: useRef(null),
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !Object.values(dropdownRefs).some(
          (ref) => ref.current && ref.current.contains(event.target)
        )
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const renderDropdown = (type) => {
    let content;
    const isNavDropdown = ["Home", "Create", "Dashboard"].includes(type);

    if (type === "Home") {
      content = (
        <>
          <DropdownItem
            icon={<FaHome />}
            title="Overview"
            subtitle="Site Overview"
          />
          <DropdownItem
            icon={<FaNewspaper />}
            title="Updates"
            subtitle="Recent News"
          />
        </>
      );
    } else if (type === "Create") {
      content = (
        <>
          <DropdownItem
            icon={<FaPlusCircle />}
            title="Create Sale"
            subtitle="Start a new sale"
          />
          <DropdownItem
            icon={<FaLock />}
            title="Create Locker"
            subtitle="Lock your tokens"
          />
        </>
      );
    } else if (type === "User") {
      content = (
        <>
          <DropdownText title="Profile" subtitle="View and edit your profile" />
          <DropdownText title="Logout" subtitle="Sign out of your account" />
        </>
      );
    } else if (type === "Settings") {
      content = (
        <>
          <DropdownText title="Preferences" subtitle="Theme, language and more" />
          <DropdownText title="Security" subtitle="Manage passwords and devices" />
        </>
      );
    } else if (type === "Help") {
      content = (
        <>
          <DropdownIconText icon={<FaQuestionCircle />} title="Support" subtitle="Need help?" />
          <DropdownIconText icon={<FaTwitter />} title="Twitter" subtitle="Our twitter account" />
          <DropdownIconText icon={<FaTelegramPlane />} title="Telegram" subtitle="Our telegram channel" />
          <DropdownIconText icon={<FaBook />} title="Docs" subtitle="Our Documentation" />
          <DropdownIconText icon={<FaYoutube />} title="Youtube" subtitle="Our youtube channel" />
          <DropdownIconText icon={<FaDiscord />} title="Discord" subtitle="Our discord account" />
        </>
      );
    } else if (type === "More") {
      content = (
        <>
          <DropdownText title="More Options" subtitle="Additional navigation items" />
          <DropdownText title="Legal" subtitle="Terms and Privacy" />
        </>
      );
    } else {
      // Dashboard dropdown
      content = (
        <>
          <DropdownItem icon={<FaChartBar />} title="Sales" subtitle="View sales" />
          <DropdownItem icon={<FaLock />} title="Token Lockers" subtitle="View lockers" />
          <DropdownItem icon={<FaLock />} title="Liquidity Lockers" subtitle="View lockers" />
          <DropdownItem icon={<FaTrophy />} title="Leaderboard" subtitle="Discover the Top Sales" />
        </>
      );
    }

    return (
      <div
        className={`absolute mt-2 bg-[#14213D] border border-[#2A3B5F] rounded-xl p-4 w-[90vw] max-w-[300px] sm:w-[300px] grid gap-4 z-50 ${
          isNavDropdown ? "left-0 md:left-4" : "md:left-auto md:right-0"
        } transition-all duration-200 ease-in-out transform ${
          activeDropdown === type ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {content}
      </div>
    );
  };

  const DropdownItem = ({ icon, title, subtitle }) => (
    <div className="flex items-center space-x-3">
      <div className="text-white w-8 h-8 sm:w-10 sm:h-10">{icon}</div>
      <div>
        <div className="font-semibold text-base sm:text-lg">{title}</div>
        <div className="text-sm sm:text-base text-gray-300">{subtitle}</div>
      </div>
    </div>
  );

  const DropdownText = ({ title, subtitle }) => (
    <div>
      <div className="font-semibold text-sm sm:text-base">{title}</div>
      <div className="text-xs sm:text-sm text-gray-300">{subtitle}</div>
    </div>
  );

  const DropdownIconText = ({ icon, title, subtitle }) => (
    <div className="flex items-center space-x-2">
      <div className="text-lg sm:text-xl text-white">{icon}</div>
      <div>
        <div className="font-semibold text-sm sm:text-base">{title}</div>
        <div className="text-xs sm:text-sm text-gray-300">{subtitle}</div>
      </div>
    </div>
  );

  const rightDropdowns = [
    { icon: <FaUser />, name: "User" },
    { icon: <FaCog />, name: "Settings" },
    { icon: <FaQuestion />, name: "Help" },
  ];

  return (
    <div className="text-white w-full p-4 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto relative">
      {/* Mobile Menu Toggle */}
      <div className="flex justify-between w-full md:hidden">
        <div className="text-xl font-bold">Logo</div>
        <button
          className="text-2xl relative w-8 h-8 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
        >
          <div className="relative w-6 h-6">
            <FaBars
              className={`absolute transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? "opacity-0 rotate-90 scale-0"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <FaTimes
              className={`absolute transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 rotate-90 scale-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 w-full md:w-auto`}
      >
        {["Home", "Create", "Dashboard"].map((item) => (
          <div key={item} className="relative" ref={dropdownRefs[item]}>
            <button
              className="hover:underline text-sm sm:text-base"
              onClick={() =>
                setActiveDropdown(activeDropdown === item ? null : item)
              }
            >
              {item}
            </button>
            {activeDropdown === item && renderDropdown(item)}
          </div>
        ))}
        <div className="relative" ref={dropdownRefs.More}>
          <button
            className="text-lg sm:text-xl"
            onClick={() =>
              setActiveDropdown(activeDropdown === "More" ? null : "More")
            }
          >
            ...
          </button>
          {activeDropdown === "More" && renderDropdown("More")}
        </div>
      </div>

      {/* Right Side Icons and Wallet Button */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        {rightDropdowns.map(({ icon, name }) => (
          <div key={name} className="relative" ref={dropdownRefs[name]}>
            <button
              className="border border-white p-1.5 sm:p-2 rounded-md text-lg sm:text-xl flex items-center justify-center"
              onClick={() =>
                setActiveDropdown(activeDropdown === name ? null : name)
              }
              aria-haspopup="true"
              aria-expanded={activeDropdown === name}
              aria-label={name}
            >
              {icon}
            </button>
            {activeDropdown === name && renderDropdown(name)}
          </div>
        ))}
        <button className="border border-white px-3 py-1 sm:px-4 sm:py-1 rounded-full text-sm sm:text-base whitespace-nowrap">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}
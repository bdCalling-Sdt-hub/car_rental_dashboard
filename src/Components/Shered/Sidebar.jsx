import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { CiLocationOn, CiLogout } from "react-icons/ci";
import logo from "../../../src/assets/logo1.png";
import { RiDashboard3Line, RiUserSearchLine } from "react-icons/ri";
import { BiDollarCircle } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoGitMergeOutline, IoSettingsOutline } from "react-icons/io5";
import { logout } from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const admin = false;

  const links = [
    {
      path: "/",
      label: "Dashboard",
      icon: <RiDashboard3Line size={22} />,
      sub_menu: false,
    },

    {
      path: "#",
      label: "Transaction",
      icon: <BiDollarCircle size={22} />,
      sub_menu: [
        {
          path: "/transaction",
          label: "Transaction",
          icon: <></>,
        },
        {
          path: "/refund",
          label: "Refund",
          icon: <></>,
        },
        {
          path: "/bank-transfer",
          label: "Bank Transfer",
          icon: <></>,
        },
      ],
    },
    {
      path: "/total-user",
      label: "Total User",
      icon: <FaRegUser size={22} />,
      sub_menu: false,
    },
    {
      path: "/total-host",
      label: "Total Host",
      icon: <RiUserSearchLine size={22} />,
      sub_menu: false,
    },

    {
      path: "/destination",
      label: "Destination",
      icon: <CiLocationOn size={22} />,
      sub_menu: false,
    },
    {
      path: "/trip-management",
      label: "Trip management",
      icon: <IoGitMergeOutline size={22} />,
      sub_menu: false,
    },
    {
      path: "/contact-us",
      label: "Contact Management",
      icon: <FiPhone size={22} />,
      sub_menu: false,
    },

    {
      path: "#",
      label: "Settings",
      icon: <IoSettingsOutline size={22} />,
      sub_menu: [
        {
          path: "/profile",
          label: "Profile",
          icon: <></>,
        },
        {
          path: "/terms",
          label: "Terms & Condition",
          icon: <></>,
        },
        {
          path: "/privacy-policy",
          label: "Privacy policy",
          icon: <></>,
        },
        {
          path: "/faqs",
          label: "FAQ",
          icon: <></>,
        },
        {
          path: "/trust-safety",
          label: "Trust & Safety",
          icon: <></>,
        },
        {
          path: "/hosting-guide",
          label: "Hosting Guide",
          icon: <></>,
        },
        {
          path: "/tips-tricks",
          label: "Tips & Tricks",
          icon: <></>,
        },
        {
          path: "/feedback",
          label: "feedback",
          icon: <></>,
        },
      ],
    },
  ];

  const handleLogOut = () => {
    // localStorage.removeItem("token");
    // navigate("/auth/login");
    dispatch(logout())
    navigate("/auth/login");
  };
  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      contentRefs.current[
        openIndex
      ].style.maxHeight = `${contentRefs.current[openIndex].scrollHeight}px`;
    }
    contentRefs.current.forEach((ref, index) => {
      if (ref && index !== openIndex) {
        ref.style.maxHeight = "0px";
      }
    });
  }, [openIndex]);
  return (
    <div id="sidebar" className=" w-full h-full ">
      <div className="log mb-5 w-full  ">
        <Link to={`/`}>
          <div className="flex  justify-center pt-7">
          <div className="flex items-center gap-2">
            <h1 className="text-6xl font-bold font-mono">NARDO</h1>
            <img src={logo} alt="Logo" className="w-[50px]" />
          </div>
          </div>
        </Link>
      </div>

      <div className="start-start flex-col gap-4 mt-5 text-black ">
        {links?.map((item, index) => {
          const isActive = item.path === pathname;
          const isSubMenuActive =
            item.sub_menu &&
            item.sub_menu.some((subItem) => subItem.path === pathname);
          if (item?.sub_menu) {
            return (
              <div key={index} className="w-full mt-5 relative">
                {isSubMenuActive ? (
                  <div
                    className="absolute left-0  bg-[#6A6A6A] h-[38px] w-2  "
                    style={{
                      borderRadius: "0 10px 10px 0",
                    }}
                  ></div>
                ) : (
                  ""
                )}
                <div
                  onClick={() => toggleAccordion(index)}
                  className={`start-center ml-10 gap-2 w-full py-2 px-4  cursor-pointer ${
                    isSubMenuActive ? "text-black bg-white " : "bg-[#8D8D8D]"
                  }`}
                >
                  {item?.icon}
                  {item?.label}
                  <IoIosArrowForward />
                </div>

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="accordion-content ml-10 overflow-hidden transition-max-height duration-300 ease-in-out cursor-pointer mt-1"
                  style={{
                    maxHeight:
                      openIndex === index
                        ? `${contentRefs.current[index]?.scrollHeight}px`
                        : "0px",
                  }}
                >
                  {item?.sub_menu?.map((sub_item, subIndex) => {
                    const isSubItemActive = sub_item.path === pathname;

                    return (
                      <NavLink
                        to={sub_item?.path}
                        key={subIndex}
                        className={`start-center px-5 gap-2 w-full py-2 cursor-pointer  ${
                          isSubItemActive
                            ? " bg-white mt-1"
                            : "bg-[#8D8D8D] mt-1"
                        }`}
                      >
                        {sub_item?.icon}
                        {sub_item?.label}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            );
          } else {
            return (
              <div className="w-full relative">
                {isActive ? (
                  <div
                    className="absolute left-0 mt-5 bg-[#6A6A6A] h-[38px] w-2  "
                    style={{
                      borderRadius: "0 10px 10px 0",
                    }}
                  ></div>
                ) : (
                  ""
                )}
                <NavLink
                  key={index}
                  className={`mt-4 start-center ml-10  gap-2 w-full py-2 px-4 cursor-pointer  ${
                    isActive ? " bg-white" : "bg-[#8D8D8D]"
                  }`}
                  to={item?.path}
                >
                  {item?.icon}
                  {item?.label}
                </NavLink>
              </div>
            );
          }
        })}
      </div>

      <div
        onClick={handleLogOut}
        className="flex text-[4E4E4E]  items-center bg-[#6A6A6A] gap-3 text-white ml-10 cursor-pointer px-6 hover:bg-white-500 py-2 mt-32 transition-all"
      >
        <CiLogout size={24} color="text-[4E4E4E]" />
        Log Out
      </div>
    </div>
  );
};

export default Sidebar;

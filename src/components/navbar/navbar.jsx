import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Link, useLocation } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";


const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Pages",
    children: [
      { name: "Team", path: "/team" },
      { name: "Team Details", path: "/team-details" },
      { name: "Testimonial", path: "/testimonial" },
      { name: "Project", path: "/project" },
      { name: "Project Details", path: "/project-details" },
      { name: "Gallery", path: "/gallery" },
      { name: "404", path: "/404" },
    ],
  },
  {
    name: "Donation",
    children: [
      { name: "Donation", path: "/donation" },
      { name: "Donation List", path: "/donation-list" },
      { name: "Donation Details", path: "/donation-details" },
    ],
  },
  { name: "Events", path: "/events" },
  {
    name: "Blog",
    children: [
      { name: "Blog Grid", path: "/blog-grid" },
      { name: "Blog Classic", path: "/blog-classic" },
      { name: "Blog Details", path: "/blog-details" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const dropdownRef = useRef();
  const location = useLocation();

  const closeDropdown = () => {
    setActiveDropdown(null);
    setMobileDropdown(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex py-4 items-center justify-between">
          <div className="flex-shrink-0">
            <img
              src="https://unicktheme.com/kit-sopot/wp-content/uploads/2023/03/logo-1-1.png"
              alt=""
            />
          </div>

          <div className="hidden sm:flex items-center" ref={dropdownRef}>
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(index)}
                onMouseLeave={() => item.children && setActiveDropdown(null)}
              >
                <Link
                  to={item.path || "#"}
                  className={`flex items-center px-2 lg:px-6 py-2 text-sm lg:text-lg font-medium text-black 
                    hover:border-b hover:border-orange-500 hover:text-orange-500
                     transition-colors duration-300
                     ${item.path === location.pathname
                      ? 'border-b border-orange-500 text-orange-500'
                      : ''
                    }`}
                >
                  {item.name}
                  {item.children && (
                    <FaCaretDown className="inline-block ml-1 hover:rotate-180" />
                  )}
                </Link>
                {item.children && activeDropdown === index && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="block px-8 py-3 text-md font-medium text-black hover:bg-orange-500 hover:text-white transition-colors duration-300"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="primary"
              className="bg-orange-500 hover:bg-black hover:text-white rounded-full p-4 w-36 h-12"
            >
              Donate Now
            </Button>
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 bg-orange-500 text-white"
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <MdClose className="h-6 w-6" />
              ) : (
                <MdMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden transition-all duration-300 ease-in-out ${menuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <div className="space-y-1 pt-2">
          {navigation.map((item, index) => (
            <div key={item.name} className="relative">
              <Link
                to={item.path}
                onClick={() => {
                  mobileDropdown === index
                    ? setMobileDropdown(null)
                    : setMobileDropdown(index)

                  !item.children && setMenuOpen(!menuOpen)
                }}
                className={`w-full flex items-center text-left px-4 py-2 text-base font-medium text-black hover:bg-orange-500 hover:text-white ${location.pathname === item.path
                    ? 'bg-orange-500 text-white'
                    : ''
                  }`}
              >
                {item.name}
                {item.children && (
                  <FaCaretDown className="inline-block ml-1 hover:rotate-180" />
                )}
              </Link>
              {item.children && mobileDropdown === index && (
                <div className="pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.path}
                      className="block px-4 py-2 text-sm text-black hover:bg-orange-500 hover:text-white"
                      onClick={() => {
                        setMenuOpen(!menuOpen)
                      }}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
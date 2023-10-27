import Logo from "../assets/logo.jpg";
import { navLinks } from "../Pages/ClientPortal/index";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full hidden xl:flex xs:flex font-sans px-7">
      <div className="flex flex-row justify-between w-full ">
        <img
          src={Logo}
          alt="Logo"
          width={80}
          height={80}
          className="m-0 w-[40px] h-[40px] rounded-full relative top-2"
        />

        <ul className="flex flex-row gap-11 justify-center items-center  ">
          {navLinks.map((item) => (
            <Link key={item.label} to={item.to}>
              <li className="hover:bg-[--logo-color] hover:opacity-80 py-3 px-5 rounded-full hover:text-black  text-[--logo-color] font-bold  transition-all duration-300 text-grey- ">
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
        <div className="h-[50px] w-[50px] flex justify-center items-center">
          <AiOutlineSearch className="w-[25px] h-[25px]  " />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

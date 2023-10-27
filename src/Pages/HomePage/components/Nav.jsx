import Logo from "../../../assets/logo.jpg";
import { navLinks } from "../../../constants/index.js";
import {AiOutlineSearch} from 'react-icons/ai'
import { Link,} from "react-router-dom";


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
    
        {navLinks.map((item)=> (
          <Link key={item.label} to={item.to} >
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


/*   <div className="absolute top-4 left-4">
  <div className="flex-col gap-1 hidden xl:flex  " onClick={() => setShow(!show) }>
    <div className={`bg-black w-6 h-1 rounded-full ${show === true ? "rotate-45 transition-all duration-500" : ""}`}></div>
    <div  ></div>
    <div className={`bg-black w-6 h-1 rounded-full ${show === true ? "rotate-45 transition-all duration-500" : ""}`}></div>
  </div>
  
  <div>*/

  // const [show, setShow] = useState(false);
//console.log(show)
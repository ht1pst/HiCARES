import logo from "../assets/logonew.png";
import email from "../assets/icon_email.svg";
import { Link } from "react-router-dom";
function Footer(){
    return(
<section className="lg:px-20 bg-[#F8FAFC] #e2dbdb px-[20px] h-auto lg:pb-10  pt-10 w-full  "

>

    <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1550px] mx-auto">
<h1 className="lg:text-[50px] text-[32px] leading-tight font-semibold text-black flex justify-center"> Subscribe for daily update</h1>
  <div className="flex items-center relaive">

   <div className="relative mt-5 lg:mt-0 flex">
    <img src={email} alt="" className="absolute  top-[22px] left-5 hidden" />
  <input
    type="text"
    placeholder="Email address"
    className="lg:w-80 w-70 h-15 bg-[#F8FAFC] border-black border  text-black px-5   pr-4 py-2 outline-none rounded-l-md"
  />
  <div className="w-15 bg-[#1E3A5F] rounded-r-md flex items-center h-15 justify-center">
   <i className="fa-solid fa-paper-plane  text-white "></i>
   </div>
  </div>
  
   </div>
</div>
    <div className="flex lg:flex-row flex-col  gap-10 lg:justify-between mt-10 max-w-[1550px] mx-auto">

<div>
    <img src={logo} alt="" className="w-[200px] rounded-xl ml-[-40px] overflow-hidden" />
<h1 className="mt-4  leading-7 text-[26px] font-bold w-[250px]">Compassionate Care, Right at Home</h1>
    <p className="mt-4 text-[#475569] leading-7 text-[16px] font-bold lg:w-[350px]">
  Compassionate home care that promotes independence,
dignity, and peace of mind.
</p>

  <div className="hidden lg:blockflex gap-2 items-center lg:justify-center lg:justify-start mt-4 lg:mt-0">
        <p className="text-[16px] text-black font-bold">Follow Us -</p>
        
        
   <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:bg-gray-200"><i className="fa-brands fa-x-twitter fa-solid text-black group-hover:text-black"></i></a>

    <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:bg-gray-200"><i className="fa-brands fa-facebook-f fa-solid text-black group-hover:text-black"></i></a>

     <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:bg-gray-200"><i className="fa-brands fa-linkedin-in fa-solid text-black group-hover:text-black"></i></a>
    </div>


</div>

<div className="flex flex-col gap-2">
    <h1 className="text-[#1E3A5F] text-[20px] font-bold ">Company</h1>
    <div className="border border-l-0 border-r-0 border-t-0 text-gray-300"></div>
   <Link to="/" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Home</Link>
<Link to="/about" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">About</Link>
<Link to="/services" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Services</Link>
<Link to="/careers" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Careers</Link>
<Link to="/contact" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Contact</Link>
</div>

<div className="flex flex-col gap-2">
    <h1 className="text-[#1E3A5F] text-[20px] font-bold ">Company</h1>
    <div className="border border-l-0 border-r-0 border-t-0 text-gray-300"></div>
   <Link to="/personalizedcare" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Personal Care</Link>
<Link to="/homehealth" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Home Health</Link>
<Link to="/skillednursing" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Skilled Nursing</Link>
<Link to="/companioncare" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Companion Care</Link>
<Link to="/respitecare" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Respite Care</Link>
</div>


<div className="flex flex-col gap-2">
    <h1 className="text-[#1E3A5F] text-[20px] font-bold ">Contact</h1>
    <div className="border border-l-0 border-r-0 border-t-0 text-gray-300"></div>
    <a href="#" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300 w-[200px] font-bold">819 30th Ave South, Suite 200D
Moorhead, MN 56560</a>
    <a href="#" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">info@hicaresservices.com</a>
    <a href="#" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">+1 832-863-0858</a>
</div>

    </div>

<div className="border border-l-0 border-r-0 border-t-0 text-gray-300 mt-10 max-w-[1550px] mx-auto"></div>

    <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-5 max-w-[1550px] mx-auto">
 <div className="mt-5"><p className="text-[16px] text-[#475569] font-bold   px-10 lg:px-0  text-center">Copyright © 2026 HiCARES, All rights reserved.</p></div>

 <div className="flex gap-2 items-center justify-center lg:justify-start mt-4 lg:mt-0">
        <p className="text-[16px] text-black font-bold">Follow Us -</p>
        
        
   <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:bg-gray-200"><i className="fa-brands fa-x-twitter fa-solid text-black group-hover:text-black"></i></a>

    <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:bg-gray-200"><i className="fa-brands fa-facebook-f fa-solid text-black group-hover:text-black"></i></a>

     <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:bg-gray-200"><i className="fa-brands fa-linkedin-in fa-solid text-black group-hover:text-black"></i></a>
    </div>
</div>
</section>
    )
}

export default Footer
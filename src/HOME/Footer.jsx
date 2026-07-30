import logo from "../assets/HiCARES LOGO.jpeg";
function Footer(){
    return(
<section className="lg:p-20 bg-[#F8FAFC] px-[20px] h-auto pb-10 pt-10"

>
    <div className="flex lg:flex-row flex-col  gap-10 lg:justify-between">

<div>
    <img src={logo} alt="" className="w-[200px] rounded-xl" />
<h1 className="mt-4  leading-7 text-[26px] font-bold w-[250px]">Compassionate Care, Right at Home</h1>
    <p className="mt-4 text-[#475569] leading-7 text-[16px] font-bold lg:w-[350px]">
  Compassionate home care that promotes independence,
dignity, and peace of mind.
</p>

  <div className="flex gap-2 items-center lg:justify-center lg:justify-start mt-4 lg:mt-0">
        <p className="text-[16px] text-black font-bold">Follow Us -</p>
        
        
   <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:bg-gray-200"><i className="fa-brands fa-x-twitter fa-solid text-black group-hover:text-black"></i></a>

    <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:bg-gray-200"><i className="fa-brands fa-facebook-f fa-solid text-black group-hover:text-black"></i></a>

     <a href="#" className="group  inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-all duration-700 ease-in-out hover:bg-gray-200"><i className="fa-brands fa-linkedin-in fa-solid text-black group-hover:text-black"></i></a>
    </div>


</div>

<div className="flex flex-col gap-2">
    <h1 className="text-[#1E3A5F] text-[20px] font-bold ">Company</h1>
    <a href="#" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Home</a>
    <a href="#" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">About</a>
    <a href="#" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Services</a>
    <a href="#" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Careers</a>
    <a href="#" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Contact</a>
</div>

<div className="flex flex-col gap-2">
    <h1 className="text-[#1E3A5F] text-[20px] font-bold ">Company</h1>
    <a href="#" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Personal Care</a>
    <a href="#" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Home Health</a>
    <a href="#" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Skilled Nursing</a>
    <a href="#" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Companion Care</a>
    <a href="#" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">Respite Care</a>
</div>


<div className="flex flex-col gap-2">
    <h1 className="text-[#1E3A5F] text-[20px] font-bold ">Contact</h1>
    <a href="#" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300 w-[200px] font-bold">819 30th Ave South, Suite 200D
Moorhead, MN 56560</a>
    <a href="#" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">info@hicaresservices.com</a>
    <a href="#" className="text-[#475569] hover:text-[#2EC4B6] transition-colors duration-300">1234567890</a>
</div>

    </div>
</section>
    )
}

export default Footer
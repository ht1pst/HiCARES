import img from "../assets/section2img.jpg";
import img4 from "../assets/team-img1.jpg";
import img2 from "../assets/healthcare.png";
import img3 from "../assets/protection.png";
import clock from "../assets/clock.png";
function Section2() {
  return (
    <section className="h-auto pb-10 pt-20 px-[20px]">
      <div className="flex flex-col lg:flex-row relative justify-center lg:items-center lg:gap-25 gap-10">
        <div className="lg:w-150 relative">
<div className="bg-[#F5F9FA] lg:block hidden lg:w-[280px] px-5 lg:py-10 py-4 rounded-xl absolute bottom-[-50px] right-[-20px] overflow-hidden">
    <div className="flex items-center justify-between">
<div className="bg-[#1E3A5F] flex justify-center items-center lg:w-13 lg:h-13 w-8  h-8  rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="#ffffff"><path d="M339.5-108.5q-65.5-28.5-114-77t-77-114Q120-365 120-440t28.5-140.5q28.5-65.5 77-114t114-77Q405-800 480-800t140.5 28.5q65.5 28.5 114 77t77 114Q840-515 840-440t-28.5 140.5q-28.5 65.5-77 114t-114 77Q555-80 480-80t-140.5-28.5ZM480-440Zm112 168 56-56-128-128v-184h-80v216l152 152ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56ZM480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Z"/></svg>
</div>

<h1 className="lg:text-[24px] text-[16px] font-bold">Schedule Hours</h1>
    </div>


     <div className="flex lg:justify-between gap-3 lg:mt-5 mt-2">
        <h1 className="lg:text-[18px] font-bold">Mon - Fri</h1>
        <p  className="lg:text-[18px] font-bold">09:00 -06:00</p>
     </div>


       <div className="flex lg:justify-between gap-3 lg:mt-5 mt-2">
        <h1 className="lg:text-[18px] font-bold">Saturday</h1>
        <p  className="lg:text-[18px] font-bold">09:00 -06:00</p>
     </div>


       <div className="flex lg:justify-between gap-10 lg:mt-5 mt-2">
        <h1 className="lg:text-[18px] font-bold">Sunday</h1>
        <p  className="lg:text-[18px] font-bold">Off Day</p>
     </div>


</div>

            <img src={img} alt="" className="lg:w-150 rounded-xl border border-5 border-gray-200" />
        </div>

<div className="bg-[#F5F9FA] w-[280px] lg:hidden block lg:w-[280px] px-5 lg:py-10 py-4 rounded-xl">
    <div className="flex items-center justify-between">
<div className="bg-[#1E3A5F] flex justify-center items-center lg:w-13 lg:h-13 w-8  h-8  rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="#ffffff"><path d="M339.5-108.5q-65.5-28.5-114-77t-77-114Q120-365 120-440t28.5-140.5q28.5-65.5 77-114t114-77Q405-800 480-800t140.5 28.5q65.5 28.5 114 77t77 114Q840-515 840-440t-28.5 140.5q-28.5 65.5-77 114t-114 77Q555-80 480-80t-140.5-28.5ZM480-440Zm112 168 56-56-128-128v-184h-80v216l152 152ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56ZM480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Z"/></svg>
</div>

<h1 className="text-[24px]  font-bold">Schedule Hours</h1>
    </div>


     <div className="flex justify-between  mt-5">
        <h1 className="text-[18px] font-bold">Mon - Fri</h1>
        <p  className="text-[18px] font-bold">09:00 -06:00</p>
     </div>


       <div className="flex justify-between  mt-5">
        <h1 className="text-[18px] font-bold">Saturday</h1>
        <p  className="text-[18px] font-bold">09:00 -06:00</p>
     </div>


       <div className="flex justify-between  mt-5">
        <h1 className="text-[18px] font-bold">Sunday</h1>
        <p  className="text-[18px] font-bold">Off Day</p>
     </div>


</div>

        <div className="">
            <div>
             <div className="flex items-center gap-3 border border-gray-300 w-[220px] py-[5px] justify-center rounded-3xl font-semibold ">
    <svg
  width="8"
  height="8"
  viewBox="0 0 8 8"
  fill="currentColor"
>
  <circle cx="4" cy="4" r="4" />
</svg>
    <p className="text-gray-700 text-[13px]">WELCOME TO HICARES LLC</p>
</div>
           
           </div>
           <h1 className="lg:text-[60px] text-[33px] font-bold lg:w-[650px] lg:leading-[70px] leading-[40px] mt-5">Compassionate Home Care You Can Trust</h1>
           <p className="text-[16px] lg:w-[700px] font-semibold text-gray-600 mt-5">At HiCARES LLC, we believe there's no place like home. Our compassionate caregivers provide personalized in-home care that helps individuals maintain their independence, dignity, and quality of life while giving families peace of mind.</p>

<div className="flex flex-col lg:flex-row lg:items-center gap-3 mt-5">
    <div className="bg-[#7fe7db] flex justify-center items-center w-14 h-14 rounded-full">
    <img src={img2} alt="" className="w-7" />
    </div>

    <div className="leading-[30px]">
        <h1 className="text-[25px] font-bold">Compassionate Home Care</h1>
        <p className="text-[16px] font-semibold text-gray-600">Every care plan is tailored to meet each client's unique needs and goals.</p>
    </div>

    
</div>


<div className="flex flex-col lg:flex-row lg:items-center gap-3 mt-5">
    <div className="bg-[#FFF4D6] #7fe7db flex justify-center items-center w-14 h-14 rounded-full">
    <img src={img3} alt="" className="w-7" />
    </div>

    <div className="leading-[30px]">
        <h1 className="text-[25px] font-bold">Skilled Caregivers</h1>
        <p className="text-[16px] font-semibold text-gray-600">Our dedicated caregivers deliver reliable, respectful, and professional support.</p>
    </div>

    
</div>

            <div className="mt-5 flex">
       <button className="bg-[#1E3A5F] text-white w-[120px] h-[40px] rounded-xl font-bold">About Us</button>
    </div>

<div className="flex items-center gap-6 mt-5">
<img src={img4} alt=""className="rounded-full w-13 h-13" />
<div>
    <h1 className="text-[17px] font-bold">Janmie Ash</h1>
    <p className="text-[12px] text-gray-500">Managing Director</p>
</div>
<div>

</div>
</div>

        </div>




      </div>
    </section>
  );
}

export default Section2;
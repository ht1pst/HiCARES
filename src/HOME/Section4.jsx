import hour from "../assets/24.png";
import clockk from "../assets/clock2.png";
import doctor from "../assets/doctor.png";
import customer from "../assets/customer.png";
import img from "../assets/section4img.jpg";
function Section4(){
    return(
        <section className="h-auto pb-10 lg:pt-20 pt-10 bg-[#F5F9FA] px-[20px]">

<div className="flex flex-col lg:flex-row justify-center gap-15 items-center">

<div>
     <div className="flex items-center gap-3 border border-gray-300 w-[160px] py-[5px] justify-center rounded-3xl font-semibold ">
    <svg
  width="8"
  height="8"
  viewBox="0 0 8 8"
  fill="currentColor"
>
  <circle cx="4" cy="4" r="4" />
</svg>
    <p className="text-gray-700 text-[13px]">Why Choose us</p>
</div>

<h1 className="lg:text-[48px] text-[30px] leading-[40px] lg:leading-[65px] font-bold lg:w-[600px] mt-5 lg:mt-0">Experience Compassionate Care at Home</h1>
<p className="text-[16px] lg:w-[500px] font-bold text-gray-500 mt-5 lg:mt-0">Receive compassionate, personalized home care services designed to support your independence, comfort, and overall well-being with care you can trust.</p>

<div className="mt-5 flex">
       <button className="bg-[#1E3A5F] text-white w-[120px] h-[40px] rounded-xl font-bold">Learn More</button>

    </div>
</div>


<div className="">
    <img src={img} alt="" className="lg:w-170 rounded-xl border border-5 border-white" />
</div>

</div>


<div className="flex flex-col lg:flex-row justify-center gap-5 mt-20">

<div className="flex flex-col px-[20px] rounded-xl py-[30px] justify-center bg-[#DFF7F2] w-[320px]">

    <div className="mx-auto border border-gray-400 rounded-full p-4">
        <img src={clockk} alt="" className="w-10" />
    </div>

<h1 className="text-[24px] font-bold mx-auto mt-4">Quick Response</h1>
<p className="text-[17px] mx-auto text-center mt-4 text-gray-600">Receive top-quality medical care advanced treatment</p>

</div>


<div className="flex flex-col px-[20px] rounded-xl py-[30px] justify-center bg-[#FFF4D6] w-[320px]">

    <div className="mx-auto border border-gray-400 rounded-full p-4">
        <img src={customer} alt="" className="w-10" />
    </div>

<h1 className="text-[24px] font-bold mx-auto mt-4">Customer Focus</h1>
<p className="text-[17px] mx-auto text-center mt-4 text-gray-600">Patients first personalized and compassionate care</p>

</div>


<div className="flex flex-col px-[20px] rounded-xl py-[30px] justify-center bg-[#FFE8DE] w-[320px]">

    <div className="mx-auto border border-gray-400 rounded-full p-4">
        <img src={doctor} alt="" className="w-10" />
    </div>

<h1 className="text-[24px] font-bold mx-auto mt-4">50+ Expert Doctors</h1>
<p className="text-[17px] mx-auto text-center mt-4 text-gray-600">Experience doctor providing specialized quality</p>

</div>


<div className="flex flex-col px-[20px] rounded-xl py-[30px] justify-center bg-[#F2E8FF] w-[320px]">

    <div className="mx-auto border border-gray-400 rounded-full p-4">
        <img src={hour} alt="" className="w-10" />
    </div>

<h1 className="text-[24px] font-bold mx-auto mt-4">24/7 Instant Support</h1>
<p className="text-[17px] mx-auto text-center mt-4">Round-the-clock support for your healthcare</p>

</div>




</div>
        </section>
    )
}

export default Section4

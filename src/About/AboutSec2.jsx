import img from "../assets/aboutsec2img1.jpg";
import img2 from "../assets/aboutsec2img2.jpg";
function AboutSec2(){
    return(
       <section className="pt-10 pb-10 h-auto">
<div className="flex justify-center gap-20 ">

<div className="flex gap-15">
<div className="mt-10">
    <h1 className="text-[38px] font-bold w-[300px]">Healthcare With Personal Touch</h1>
    <img src={img} alt="" className="w-[400px] object-cover h-[400px] rounded-xl mt-5"/>
</div>

<div className="">
    <img src={img2} alt="" className="w-[400px] object-cover h-[400px] rounded-xl" />
    <p className="text-[14px] font-bold leading-[25px] w-[380px] text-gray-500 mt-5">
        At HiCARES, we're committed to delivering compassionate home care that puts people first. Through personalized care plans and dependable caregivers, we help individuals and families enjoy greater comfort, confidence, and independence.
    </p>
</div>

</div>

<div>
    <p className="text-[14px] font-bold leading-[25px] w-[380px] text-gray-500">Your comfort is our priority, providing personalized home care services tailored to help you live safely, independently, and with confidence.</p>

    <p className="font-bold flex gap-3"><span><i class="far fa-check-circle"></i></span> Experienced Team</p>
     <p className="font-bold flex gap-3"><span><i class="far fa-check-circle"></i></span>Emergency Healthcare Services</p>
      <p className="font-bold flex gap-3"><span><i class="far fa-check-circle"></i></span> State-of The Digital Technology</p>
       <p className="font-bold flex gap-3"><span><i class="far fa-check-circle"></i></span> 24/7 Emergency Supported Team</p>

       <div className="bg-[#FFF4D6] w-[350px] h-[120px] justify-center flex items-center gap-9 rounded-xl mt-8">
        <h1 className="text-[48px] font-bold">24/7</h1>
        <p className="text-[16px] w-[150px]">Comprehensive Care & Support</p>
       </div>

         <div className="bg-[#7fe7db] w-[350px] mt-7 h-[120px] justify-center flex items-center gap-9 rounded-xl">
        <h1 className="text-[48px] font-bold">100%</h1>
        <p className="text-[16px] w-[150px]">Dedicated Home Care Team</p>
       </div>
</div>
</div>

       </section> 
    )
}
export default AboutSec2
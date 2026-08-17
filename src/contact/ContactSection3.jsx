function ContactSection3(){
return(

    
    <div className="flex flex-col justify-center mx-auto h-auto ">

<section className="py-20 bg-[#F2F8F7]">
  <div className="max-w-[1100px] mx-auto px-6 lg:px-10">

    <div className="bg-white rounded-[30px] shadow-sm px-8 py-12 lg:px-16 lg:py-14 text-center">

      {/* Label */}
      <p className="uppercase tracking-[3px] text-[#2EC4B6] font-semibold text-sm">
        Schedule Your Care
      </p>

      {/* Heading */}
    

      {/* Description */}
      <p className="mt-5 text-[#526777] text-[16px] lg:text-lg leading-7 max-w-[650px] mx-auto">
        Ready to discuss your care needs? Choose a convenient time to speak
        with a member of the HiCARES team. We’ll listen, answer your questions,
        and help you determine the right next steps.
      </p>

      {/* Button */}
      <div className="mt-8">
         <a
  href="https://calendly.com/hicares"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center bg-[#1E3A5F] hover:bg-[#2EC4B6] text-white font-semibold px-8 py-4 rounded-xl transition duration-300"
>
  Book an Appointment →
</a>
      </div>

      {/* Small note */}
      <p className="mt-5 text-sm text-gray-500">
        Select a date and time that works best for you.
      </p>

    </div>

  </div>
</section>

    </div>
)
}

export default ContactSection3
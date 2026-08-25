function ContactSection2(){
    return(
<section className="h-auto pb-10 ">

<div className="flex lg:flex-row flex-col ">

<div className="flex flex-col gap-6 bg-[#DCE9E5] justify-center w-full lg:w-[50%] px-8 sm:px-12 lg:px-16 xl:px-24 py-12 lg:py-[50px] font-bold">

  {/* Address */}
  <div className="flex items-start gap-4 w-full max-w-[450px] mx-auto lg:mx-0">

    <div className="shrink-0 pt-1">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21C12 21 19 14.5 19 9.5C19 5.91 15.87 3 12 3C8.13 3 5 5.91 5 9.5C5 14.5 12 21 12 21Z"
          stroke="#1E3A5F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="9.5"
          r="2.5"
          stroke="#1E3A5F"
          strokeWidth="1.5"
        />
      </svg>
    </div>

    <p className="text-[#1E3A5F] leading-6">
      819 30th Ave South,
      <br />
      Suite 200D
      <br />
      Moorhead, MN 56560
    </p>

  </div>


  {/* Phone */}
  <div className="flex items-center gap-4 w-full max-w-[450px] mx-auto lg:mx-0">

    <div className="shrink-0">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.6 2.5H4.5C3.4 2.5 2.5 3.4 2.5 4.5C2.5 13.9 10.1 21.5 19.5 21.5C20.6 21.5 21.5 20.6 21.5 19.5V17.4C21.5 16.8 21.1 16.3 20.5 16.1L16.8 14.9C16.2 14.7 15.6 14.9 15.2 15.4L13.7 17.2C10.8 15.8 8.2 13.2 6.8 10.3L8.6 8.8C9.1 8.4 9.3 7.8 9.1 7.2L7.9 3.5C7.7 2.9 7.2 2.5 6.6 2.5Z"
          stroke="#1E3A5F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

    <p className="text-[#1E3A5F]">
      +1 832-863-0858
    </p>

  </div>


  {/* Email */}
  <div className="flex items-center gap-4 w-full max-w-[450px] mx-auto lg:mx-0">

    <div className="shrink-0">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="#1E3A5F"
          strokeWidth="1.5"
        />

        <path
          d="M4 7L12 13L20 7"
          stroke="#1E3A5F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

    <p className="text-[#1E3A5F] break-all">
      info@hicaresservices.com
    </p>

  </div>

</div>


<div className="lg:w-[50%] lg:px-[100px] py-[50px] bg-[#F2F8F7] #1f2835 #364457 text-[#1E3A5F] px-[20px]">

<form className="w-full max-w-[600px] space-y-5">

  {/* First + Last Name */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

    <div>
      <label className="block text-[#1E3A5F] font-semibold mb-2">
        First Name
      </label>

      <input
        type="text"
        placeholder="First Name"
        className="w-full px-4 py-3  border border-gray-200 bg-white outline-none focus:border-[#2EC4B6] transition"
      />
    </div>

    <div>
      <label className="block text-[#1E3A5F] font-semibold mb-2">
        Last Name
      </label>

      <input
        type="text"
        placeholder="Last Name"
        className="w-full px-4 py-3  border border-gray-200 bg-white outline-none focus:border-[#2EC4B6] transition"
      />
    </div>

  </div>


  {/* Email */}
  <div>
    <label className="block text-[#1E3A5F] font-semibold mb-2">
      Email Address
    </label>

    <input
      type="email"
      placeholder="Email Address"
      className="w-full px-4 py-3  border border-gray-200 bg-white outline-none focus:border-[#2EC4B6] transition"
    />
  </div>


  {/* Message */}
  <div>
    <label className="block text-[#1E3A5F] font-semibold mb-2">
      Message
    </label>

    <textarea
      rows="6"
      placeholder="Write your message..."
      className="w-full px-4 py-3  border border-gray-200 bg-white outline-none focus:border-[#2EC4B6] transition resize-none"
    ></textarea>
  </div>


  {/* Send Button */}
  <button
    type="submit"
    className="bg-[#1E3A5F] hover:bg-[#2EC4B6] text-white font-semibold w-full py-2  transition"
  >
    Send Message →
  </button>

</form>

</div>

</div>


<div className="mt-16">

  <div className="flex flex-col items-center text-center">

    <p className="uppercase tracking-[3px] text-[#2EC4B6] font-semibold text-sm">
      Find Us
    </p>

    <h2 className="text-[#1E3A5F] text-3xl lg:text-4xl font-bold mt-2">
      Our Location
    </h2>

    <p className="text-[#526777] mt-3">
      Visit us at our office in Moorhead, Minnesota.
    </p>

  </div>


  <div className="w-full h-[400px] mt-8 rounded-[30px] overflow-hidden shadow-lg">

    <iframe
      src="https://www.google.com/maps?q=819+30th+Ave+South+Suite+200D,+Moorhead,+MN+56560&output=embed"
      width="100%"
      height="100%"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      title="HiCARES Location"
    ></iframe>

  </div>

</div>





</section>
    )
}

export default ContactSection2
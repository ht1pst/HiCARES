import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabase";
function ReferralSection6(){
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const referralData = {
    referrer_name: formData.get("referrer_name"),
    referrer_email: formData.get("referrer_email"),
    referrer_phone: formData.get("referrer_phone"),
    client_name: formData.get("client_name"),
    client_phone: formData.get("client_phone"),
    client_email: formData.get("client_email"),
    relationship: formData.get("relationship"),
    service_needed: formData.get("service_needed"),
    message: formData.get("message"),
    consent_given: formData.get("consent_given") === "on",
  };

  // Save referral to Supabase
  const { error } = await supabase
    .from("Referrals")
    .insert([referralData]);

  if (error) {
    console.error("Error submitting referral:", error);
    alert("Something went wrong. Please try again.");
    return;
  }

  // Send email notification
  const { data: emailData, error: emailError } =
    await supabase.functions.invoke("smooth-handler", {
      body: referralData,
    });

  if (emailError) {
    console.error("Email notification error:", emailError);
    alert("Referral submitted, but the email notification could not be sent.");
    return;
  }

  console.log("Email sent:", emailData);

  alert("Referral submitted successfully!");
  e.target.reset();
};
    return(
<section id="form" className="relative py-20 px-6 bg-[#F7FAF8] overflow-hidden">
  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="text-center max-w-2xl mx-auto mb-12">
      <motion.p className="text-[#2EC4B6] font-semibold text-sm uppercase tracking-wider mb-3"
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Make a Referral
      </motion.p>

      <motion.h2 className="text-[32px] md:text-[42px] font-bold text-[#1E3A5F] leading-tight"
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Refer Someone Who May Need Care
      </motion.h2>

      <motion.p className="text-[#5F6F7A] text-[15px] md:text-[16px] mt-4 leading-7"
      initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Know someone who could benefit from compassionate, professional
        care? Complete the form below and our team will be in touch.
      </motion.p>
    </div>

    {/* Form Card */}
    <motion.div
initial={{ opacity: 0, y: 40 }}       // starts slightly below and invisible
  whileInView={{ opacity: 1, y: 0 }}    // slides up into view
  viewport={{ once: true, amount: 0.3 }} // animate only the first time
  transition={{ duration: 0.8, ease: "easeOut" }}

      className="
        relative max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-10
        before:absolute before:inset-0 before:rounded-3xl
        before:border-t before:border-l before:border-[#D9E3DE]
        after:absolute after:inset-0 after:rounded-3xl
        after:border-b after:border-r after:border-[#D9E3DE]
      "
    >
      <div className="relative z-10">

        {/* Form Illustration */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-[#E5F2E8] flex items-center justify-center">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-11 h-11"
            >
              <rect
                x="15"
                y="8"
                width="34"
                height="48"
                rx="4"
                stroke="#2EC4B6"
                strokeWidth="2.5"
              />

              <path
                d="M23 22H41"
                stroke="#2EC4B6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              <path
                d="M23 31H41"
                stroke="#2EC4B6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              <path
                d="M23 40H34"
                stroke="#2EC4B6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              <path
                d="M23 16V12"
                stroke="#2EC4B6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              <path
                d="M41 16V12"
                stroke="#2EC4B6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Form Title */}
        <div className="text-center mb-8">
          <h3 className="text-[24px] font-bold text-[#1E3A5F]">
            Referral Information
          </h3>

          <p className="text-[14px] text-[#6B7280] mt-2">
            Please provide some basic information about the person you are
            referring.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Referrer Information */}
          <div>
            <h4 className="text-[17px] font-semibold text-[#1E3A5F] mb-4">
              Your Information
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  name="referrer_name"
                  className="
                    w-full px-4 py-3 rounded-xl border border-[#D9E3DE]
                    outline-none text-sm text-[#1E3A5F]
                    placeholder:text-[#9CA3AF]
                    focus:border-[#2EC4B6]
                    focus:ring-2 focus:ring-[#2EC4B6]/10
                    transition
                  "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  name="referrer_email"
                  className="
                    w-full px-4 py-3 rounded-xl border border-[#D9E3DE]
                    outline-none text-sm text-[#1E3A5F]
                    placeholder:text-[#9CA3AF]
                    focus:border-[#2EC4B6]
                    focus:ring-2 focus:ring-[#2EC4B6]/10
                    transition
                  "
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Your Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  name="referrer_phone"
                  className="
                    w-full px-4 py-3 rounded-xl border border-[#D9E3DE]
                    outline-none text-sm text-[#1E3A5F]
                    placeholder:text-[#9CA3AF]
                    focus:border-[#2EC4B6]
                    focus:ring-2 focus:ring-[#2EC4B6]/10
                    transition
                  "
                />
              </div>

            </div>
          </div>

          {/* Person Being Referred */}
          <div className="pt-4">
            <h4 className="text-[17px] font-semibold text-[#1E3A5F] mb-4">
              Person You Are Referring
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter their full name"
                  name="client_name"
                  className="
                    w-full px-4 py-3 rounded-xl border border-[#D9E3DE]
                    outline-none text-sm text-[#1E3A5F]
                    placeholder:text-[#9CA3AF]
                    focus:border-[#2EC4B6]
                    focus:ring-2 focus:ring-[#2EC4B6]/10
                    transition
                  "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter their phone number"
                  name="client_phone"
                  className="
                    w-full px-4 py-3 rounded-xl border border-[#D9E3DE]
                    outline-none text-sm text-[#1E3A5F]
                    placeholder:text-[#9CA3AF]
                    focus:border-[#2EC4B6]
                    focus:ring-2 focus:ring-[#2EC4B6]/10
                    transition
                  "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter their email"
                  name="client_email"
                  className="
                    w-full px-4 py-3 rounded-xl border border-[#D9E3DE]
                    outline-none text-sm text-[#1E3A5F]
                    placeholder:text-[#9CA3AF]
                    focus:border-[#2EC4B6]
                    focus:ring-2 focus:ring-[#2EC4B6]/10
                    transition
                  "
                />
              </div>

              <div>
      <label className="block text-sm font-medium text-[#374151] mb-2">
  Relationship to You
</label>

<select
  name="relationship"
  className="
    w-full px-4 py-3 rounded-xl border border-[#D9E3DE]
    outline-none text-sm text-[#1E3A5F]
    bg-white
    focus:border-[#2EC4B6]
    focus:ring-2 focus:ring-[#2EC4B6]/10
    transition
  "
>
  <option value="">Select relationship</option>
  <option value="Family Member">Family Member</option>
  <option value="Friend">Friend</option>
  <option value="Colleague">Colleague</option>
  <option value="Healthcare Professional">Healthcare Professional</option>
  <option value="Other">Other</option>
</select>
              </div>

            </div>
          </div>

          {/* Care Information */}
          <div className="pt-4">
            <h4 className="text-[17px] font-semibold text-[#1E3A5F] mb-4">
              Care Information
            </h4>

            <div className="space-y-5">

              <div>

               <label className="block text-sm font-medium text-[#374151] mb-2">
  What Type of Support May They Need?
</label>

<select
  name="service_needed"
  className="
    w-full px-4 py-3 rounded-xl border border-[#D9E3DE]
    outline-none text-sm text-[#1E3A5F]
    bg-white
    focus:border-[#2EC4B6]
    focus:ring-2 focus:ring-[#2EC4B6]/10
    transition
  "
>
  <option value="">Select a service</option>
  <option value="Personal Care">Personal Care</option>
  <option value="Companion Care">Companion Care</option>
  <option value="Respite Care">Respite Care</option>
  <option value="Medication Support">Medication Support</option>
  <option value="Daily Living Support">Daily Living Support</option>
  <option value="Other">Other</option>
</select>
              </div>

              <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
  Tell Us More
</label>

<textarea
  name="message"
  rows="5"
  placeholder="Please share any helpful information about their care needs..."
  className="
    w-full px-4 py-3 rounded-xl border border-[#D9E3DE]
    outline-none resize-none text-sm text-[#1E3A5F]
    placeholder:text-[#9CA3AF]
    focus:border-[#2EC4B6]
    focus:ring-2 focus:ring-[#2EC4B6]/10
    transition
  "
></textarea>
              </div>

            </div>
          </div>

          {/* Consent */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 accent-[#2EC4B6]"
                name="consent_given"
              />

              <span className="text-[13px] text-[#6B7280] leading-5">
                I confirm that I have permission to share the information
                provided and understand that HiCARES may contact the person
                referred regarding their care needs.
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="pt-3 text-center">
            <button
              type="submit"
              className="
                inline-flex items-center justify-center
                px-8 py-3.5 rounded-full
                bg-[#2EC4B6] text-white
                font-semibold text-sm
                hover:bg-[#25B2A5]
                transition-all duration-300
                shadow-sm hover:shadow-md
              "
            >
              Submit Referral
            </button>
          </div>

        </form>
      </div>
    </motion.div>
  </div>
</section>
    )
}

export default ReferralSection6 
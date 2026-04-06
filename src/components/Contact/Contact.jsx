import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { FiMail, FiUser, FiMessageSquare, FiSend } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_axbtt7a", // Your Service ID
        "template_1ziboq3", // Your Template ID
        form.current,
        "Rz7W9pVF0HdDryNNL", // Your Public Key
      )
      .then(
        () => {
          setIsSending(false);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            theme: "dark",
            style: {
              borderRadius: "1rem",
              background: "#0f1115",
              border: "1px solid #8245ec",
            },
          });
        },
        (error) => {
          // OPTION 1: Using the error variable to log it for debugging
          // This satisfies the "error is defined but never used" linting rule
          console.error("EmailJS Error:", error);

          setIsSending(false);
          toast.error("Failed to send message. Please try again.", {
            theme: "dark",
          });
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-[5vw] md:px-[10vw] lg:px-[15vw] bg-skills-gradient"
    >
      <ToastContainer />

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
          Get In <span className="text-[#8245ec] font-bold">Touch</span>
        </h2>
        <div className="w-12 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full opacity-60"></div>
        <p className="text-gray-400 mt-6 text-base md:text-lg max-w-xl mx-auto font-light">
          Have a question or want to work together? Drop me a message below.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side: Contact Info */}
        <div className="lg:w-1/3 flex flex-col justify-center space-y-8">
          <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Let's Collaborate
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              I'm currently open to new opportunities and freelance projects. My
              inbox is always open.
            </p>
          </div>

          <div className="flex items-center gap-4 px-6">
            <div className="w-12 h-12 rounded-full bg-[#8245ec]/10 flex items-center justify-center text-[#8245ec] border border-[#8245ec]/20">
              <FiMail size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                Email Me
              </p>
              <p className="text-white font-medium">fixbyte001@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: Modern Form */}
        <div className="lg:w-2/3">
          <div className="relative p-8 md:p-10 rounded-[2.5rem] bg-[#0f1115]/80 backdrop-blur-3xl border border-white/5 shadow-2xl">
            {/* Decorative Glow Effect */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#8245ec]/20 blur-[80px] rounded-full"></div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <FiUser className="absolute left-4 top-4 text-gray-500" />
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#8245ec]/50 transition-all placeholder:text-gray-600"
                  />
                </div>
                <div className="relative">
                  <FiMail className="absolute left-4 top-4 text-gray-500" />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#8245ec]/50 transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-gray-500" />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#8245ec]/50 transition-all placeholder:text-gray-600"
                />
              </div>

              <textarea
                name="message"
                placeholder="How can I help you?"
                rows="5"
                required
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#8245ec]/50 transition-all placeholder:text-gray-600 resize-none"
              />

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 rounded-2xl bg-[#8245ec] hover:bg-[#a855f7] text-white font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-3 transition-all shadow-[0_10px_20px_rgba(130,69,236,0.3)] disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send Message"}
                <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

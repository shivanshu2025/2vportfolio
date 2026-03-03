import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // ✅ Replace the below IDs with your actual EmailJS credentials
    emailjs
      .sendForm(
        "service_0ytm8o2", // Your EmailJS Service ID
        "template_kta4cf2", // Your EmailJS Template ID
        formRef.current,
        "CZdrD-F2kzHCuIISN" // Your EmailJS Public Key
      )
      .then((result) => {
        console.log("SUCCESS ✅", result);
        alert("Message sent successfully ✅");
        formRef.current.reset();
      })
      .catch((error) => {
        console.log("ERROR ❌", error);
        alert("Failed to send message ❌ Check console for details");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const socialLinks = [
    { icon: <FaGithub size={20} />, href: "https://github.com/shivanshu2025" },
    { icon: <FaBehance size={20} />, href: "#" },
    { icon: <FaLinkedin size={20} />, href: "https://in.linkedin.com" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="contact"
      className="bg-[#FCF9F2] py-24 px-6 md:px-12 font-sans overflow-hidden"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Heading */}
        <div className="mb-16">
          <div className="w-12 h-1 bg-[#8B7355] mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#6D5D44]">
            Get In Touch.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <motion.p variants={itemVariants} className="text-[#8B7355] text-lg leading-relaxed max-w-md">
              I am always open to discussing your project or sharing knowledge.
              Feel free to contact me with any questions or if you have a project
              we can work on together.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 text-[#6D5D44]">
                <Mail size={18} />
                <span>2vshivansu@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-[#6D5D44]">
                <Phone size={18} />
                <span>+91 9760926681</span>
              </div>
              <div className="flex items-center gap-3 text-[#6D5D44]">
                <MapPin size={18} />
                <span>India</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-[#8B7355] font-semibold uppercase tracking-widest text-sm mb-4">
                Follow me on
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, backgroundColor: "#8B7355", color: "#FCF9F2" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#8B7355] text-[#FCF9F2] transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE FORM */}
          <motion.form ref={formRef} variants={itemVariants} className="flex flex-col gap-6" onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Full name"
              required
              className="w-full bg-transparent border-2 border-[#8B7355]/30 rounded-lg p-4 outline-none focus:border-[#8B7355] transition-all placeholder:text-[#BDB19B]"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full bg-transparent border-2 border-[#8B7355]/30 rounded-lg p-4 outline-none focus:border-[#8B7355] transition-all placeholder:text-[#BDB19B]"
            />
            <textarea
              rows="6"
              name="message"
              placeholder="Message"
              required
              className="w-full bg-transparent border-2 border-[#8B7355]/30 rounded-lg p-4 outline-none focus:border-[#8B7355] transition-all placeholder:text-[#BDB19B] resize-none"
            />
            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={!isSending ? { y: -4 } : {}}
              whileTap={!isSending ? { y: 0 } : {}}
              className={`relative group mt-2 ${isSending ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              <div className="absolute inset-0 bg-[#5A4B37] rounded-lg translate-y-2" />
              <div className="relative bg-[#8B7355] text-[#FCF9F2] font-bold py-4 rounded-lg uppercase tracking-[0.2em] transition-transform group-hover:-translate-y-1">
                {isSending ? "Sending..." : "Send"}
              </div>
            </motion.button>
          </motion.form>
        </div>

        {/* FOOTER */}
        <div className="mt-32 pt-12 border-t border-[#8B7355]/20 text-center">
          <p className="text-[#BDB19B] text-sm">
            Crafted with 💛 By AmraniCh | Hosted on AWS | Deployed via Github Actions
            <span className="ml-2 bg-[#6D5D44] text-white px-2 py-0.5 rounded text-[10px]">
              v1.0.0
            </span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
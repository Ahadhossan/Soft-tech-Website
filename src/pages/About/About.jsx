/** @format */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactForm from "../../Helper/ContactForm";
import Newsletter from "../../Helper/Newsletter";
import ScrollToTopButton from "../../Helper/ScrollToTopButton";

const About = () => {
  // hero section
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  // about us section
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });

  //choice section
  const choiceRef = useRef(null);
  const choiceInView = useInView(choiceRef, { once: true, margin: "-100px" });

  // partnership section
  const partnershipRef = useRef(null);
  const partnershipInView = useInView(partnershipRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative w-full h-[90vh] md:h-[75vh] lg:h-[85vh] overflow-hidden"
        ref={heroRef}
      >
        {/* Desktop Banner */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <img
            src="https://d1foa0aaimjyw4.cloudfront.net/banner_about_e03a2d2608.webp"
            alt="Banner Desktop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mobile Banner */}
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <img
            src="https://d1foa0aaimjyw4.cloudfront.net/Why_Arbisoft_d6186a5263.jpg"
            alt="Banner Mobile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full bg-black/70 px-4">
          <div className="text-white text-start md:text-left max-w-6xl w-full">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold mb-4 w-full md:w-[50%] text-[#53aedb]"
            >
              Empowering businesses for the modern age
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg mb-6 w-full md:w-[50%]"
            >
              Specializing in integrated software, data management, and
              development services that enable businesses to take the digital
              leap to growth and success.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-900 transition"
            >
              <img
                src="../../src/assets/icon-circle.svg"
                alt="Icon"
                width={24}
                height={24}
              />
              <span>Let’s work together</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* about us */}
      <div className="pt-16 pb-16 bg-[#f8f8f6]" ref={aboutRef}>
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* left slide */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://i.ibb.co/Y4Q8k2tS/about.webp" alt="" />
          </motion.div>
          {/* right slide */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="text-sm sm:text-base md:text-xl font-bold text-[#53aedb] uppercase"
            >
              About Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl mt-3 font-bold leading-[1.8rem] md:leading-[3rem] text-[#151517]"
            >
              Innovations Excellence Building Digital Future Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-3 text-[#151517] text-sm sm:text-base md:text-lg leading-6"
            >
              SoftTech Company is committed to driving innovations and
              excellence, building a digital future together with our clients
              through cutting-edge solutions and transformative technology.
            </motion.p>
            {/* top side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center"
            >
              {/* card 1 */}
              <div className="flex items-center gap-4">
                <img src="https://i.ibb.co/TxsWWTj6/a1.webp" alt="" />
                <h1 className="text-[25px] sm:text-[17px] font-semibold leading-5 text-[#151517] ">
                  IT Infrastucture <br /> Management
                </h1>
              </div>
              {/* card 2 */}
              <div className="flex items-center gap-4">
                <img src="https://i.ibb.co/bjyJMCcg/a2.webp" alt="" />
                <h1 className="text-[25px] sm:text-[17px] font-semibold leading-5 text-[#151517]">
                  Cloud Integration <br /> Service Provide
                </h1>
              </div>
            </motion.div>
            {/* bottom side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center"
            >
              {/* card 1 */}
              <div className="flex items-center gap-4">
                <img src="https://i.ibb.co/v6fNt49L/a3.webp" alt="" />
                <h1 className="text-[25px] sm:text-[17px] font-semibold leading-5 text-[#151517]">
                  Custom Software <br /> Development
                </h1>
              </div>
              {/* card 2 */}
              <div className="flex items-center gap-4">
                <img src="https://i.ibb.co/YB5GmH6M/a4.webp" alt="" />
                <h1 className="text-[25px] sm:text-[17px] font-semibold leading-5 text-[#151517]">
                  Instant Supports <br /> any Queries
                </h1>
              </div>
            </motion.div>
            {/* button */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12"
            >
              <a
                href="#"
                className="w-full py-4 text-base text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto"
              >
                About More
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* choice section */}
      <section className="py-16 bg-[#f8f8f6] relative z-10" ref={choiceRef}>
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={choiceInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-gray-800"
            >
              Why we arere the partner of <br />{" "}
              <span className="text-[#53aedb]">choice</span> for our{" "}
              <span className="text-[#53aedb]">clients</span>
            </motion.h2>
          </div>

          {/* Glass Boxes */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Box 1 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={choiceInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group rounded-xl p-6 text-center border border-white/20 bg-white backdrop-blur-md shadow-lg transition duration-300 hover:shadow-2xl hover:bg-white/60 hover:border-blue-300"
            >
              <div className="flex flex-col items-center mb-4">
                <img
                  src="https://i.ibb.co/gZjc0zh7/Building-partnership.png"
                  alt="Building partnerships"
                  className="w-16 h-16 mb-2"
                />
                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition">
                  Building partnerships that last
                </h4>
              </div>
              <p className="text-gray-600 group-hover:text-gray-800">
                We nurture long-term relationships by creating value for our
                clients in all industries.
              </p>
            </motion.div>

            {/* Box 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={choiceInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group rounded-xl p-6 text-center border border-white/20 bg-white backdrop-blur-md shadow-lg transition duration-300 hover:shadow-2xl hover:bg-white/60 hover:border-purple-300"
            >
              <div className="flex flex-col items-center mb-4">
                <img
                  src="https://i.ibb.co/DPW7Dxjk/Creating-value.png"
                  alt="Creating value"
                  className="w-16 h-16 mb-2"
                />
                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-purple-700 transition">
                  Creating value
                </h4>
              </div>
              <p className="text-gray-600 group-hover:text-gray-800">
                Our world-class team of engineers is ready to take on diverse
                and challenging projects to create real value.
              </p>
            </motion.div>

            {/* Box 3 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={choiceInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative group rounded-xl p-6 text-center border border-white/20 bg-white backdrop-blur-md shadow-lg transition duration-300 hover:shadow-2xl hover:bg-white/60 hover:border-teal-300"
            >
              <div className="flex flex-col items-center mb-4">
                <img
                  src="https://i.ibb.co/Q7Frxny2/Proven-capability.png"
                  alt="Proven capability"
                  className="w-16 h-16 mb-2"
                />
                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-teal-700 transition">
                  Proven capability
                </h4>
              </div>
              <p className="text-gray-600 group-hover:text-gray-800">
                Give us a problem and we will engineer a solution! We build
                enterprise and analytical software for every industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* technology partnership section */}
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 py-16 md:px-16 lg:px-24 bg-gray-50"
        ref={partnershipRef}
      >
        {/* Text Content */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={partnershipInView ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            A technology <span className="text-[#53aedb]">partnership</span>
            that goes beyond code
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={partnershipInView ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed"
          >
            We believe in building enduring relationships with our clients and
            partners. Find out what they have to say about us.
          </motion.p>
        </div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={partnershipInView ? { opacity: 1, x: 0 } : {}}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://i.ibb.co/qYgMhBJj/technology-partnership.webp"
            alt="Technology Partnership"
          />
        </motion.div>
      </section>

      {/* Contact From */}
      <ContactForm />

      {/* Newsletter */}
      <Newsletter />

      {/* Scrolltop */}
      <ScrollToTopButton />
    </>
  );
};

export default About;

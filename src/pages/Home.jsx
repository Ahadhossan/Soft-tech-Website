/** @format */

import Offerings from "../Helper/Offerings";
import Newsletter from "../Helper/Newsletter";
import ButtonFill from "../Button/ButtonFill";
import ScrollToTopButton from "../Helper/ScrollToTopButton";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactForm from "../Helper/ContactForm";

const Hero = () => {
  // hero section
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  // provide
  const provideRef = useRef(null);
  const provideInView = useInView(provideRef, { once: true, margin: "-100px" });

  // provide
  const workRef = useRef(null);
  const workInView = useInView(workRef, { once: true, margin: "-100px" });

  // Successful
  const sucessRef = useRef(null);
  const sucessInView = useInView(sucessRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <div className="w-full px-4 py-24 hero-bg md:px-12" ref={heroRef}>
        <div className="grid items-center gap-10 mx-auto max-w-7xl md:grid-cols-2">
          {/* Left Side */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold text-[#53aedb] leading-tight"
            >
              Software Company SoftTech Services
            </motion.h2>
            {/* <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2 }}
              className="mt-4 text-[#EDFFF8] max-w-md"
            >
              Secure, scalable, and innovative software and websites that
              deliver results.
            </motion.p> */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.5 }}
              className="mt-4 text-[#EDFFF8] max-w-md"
            >
              SoftTech Services is a cutting-edge software company delivering
              innovative, scalable, and secure digital solutions tailored to
              empower businesses and streamline operations efficiently.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1.2 }}
              href="/contact"
              className="inline-block px-6 py-3 mt-6 text-white transition bg-blue-600 rounded-lg hover:bg-blue-800"
            >
              Contact Us
            </motion.a>
          </div>

          {/* Right Side (Responsive Full-Size Image) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center w-full"
          >
            <img
              src="https://i.ibb.co/fdrSzx4P/pexels-thirdman-7653460.jpg"
              alt="SoftTech Hero Banner"
              className="object-cover w-full"
            />
          </motion.div>
        </div>
      </div>

      {/* What we provide section  */}
      <div className="pt-16 pb-16 bg-white" ref={provideRef}>
        <div className="w-[90%] mx-auto">
          <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={provideInView ? { opacity: 1, x: 0 } : {}}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 1.2 }}
                className="text-lg sm:text-xl md:text-2xl font-bold text-[#53aedb] uppercase"
              >
                What we provide
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={provideInView ? { opacity: 1, x: 0 } : {}}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 1.2 }}
                className="text-[15px] sm:text-[17px] md:text-[19px] mt-1 font-semi text-[#151517]"
              >
                Provide High Quality Software’s Service for All Industry
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={provideInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              className="lg:ml-auto"
            >
              <a
                href="#"
                className="w-full py-4 text-base font-semibold text-center text-white uppercase transition-colors duration-300 bg-blue-800 rounded-full sm:text-lg md:text-xl hover:bg-blue-900 ease px-9 md:w-auto "
              >
                All Services
              </a>
            </motion.div>
          </div>
          <div className="grid items-center grid-cols-1 gap-4 mt-16 md:grid-cols-2 lg:grid-cols-3">
            {/* box 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={provideInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative p-6 transition-all duration-500 bg-blue-800 rounded-md shadow cursor-pointer hover:bg-blue-600 group">
                <img src="https://i.ibb.co/J1S5njF/s1.webp" alt="" />
                <h1 className="mt-5 text-xl font-semibold transition-all duration-500 group-hover:text-white">
                  Custom Softwares Development
                </h1>
                <p className="mt-4 font-medium text-gray-500 transition-all duration-500 dark:text-gray-200 group-hover:text-gray-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore iusto animi maxime numquam nostrum laboriosam
                  officiis unde rerum, ea saepe?
                </p>
                <div className="mt-6">
                  <a href="#">
                    <ButtonFill>Learn More</ButtonFill>
                  </a>
                </div>
              </div>
            </motion.div>
            {/* box 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={provideInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative p-6 transition-all duration-500 bg-blue-800 rounded-md shadow cursor-pointer hover:bg-blue-600 group">
                <img
                  src="https://i.ibb.co/39x1qHNq/s2.webp"
                  alt="s2"
                  border="0"
                />
                <h1 className="mt-5 text-xl font-semibold transition-all duration-500 group-hover:text-white">
                  Website Design and Development
                </h1>
                <p className="mt-4 font-medium text-gray-500 transition-all duration-500 dark:text-gray-200 group-hover:text-gray-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore iusto animi maxime numquam nostrum laboriosam
                  officiis unde rerum, ea saepe?
                </p>
                <div className="mt-6">
                  <a href="#">
                    <ButtonFill>Learn More</ButtonFill>
                  </a>
                </div>
              </div>
            </motion.div>
            {/* box 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={provideInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative p-6 transition-all duration-500 bg-blue-800 rounded-md shadow cursor-pointer hover:bg-blue-600 group">
                <img
                  src="https://i.ibb.co/Z6Z8KqT0/s3.webp"
                  alt="s3"
                  border="0"
                />
                <h1 className="mt-5 text-xl font-semibold transition-all duration-500 group-hover:text-white">
                  Cloud Computing and Hosting Service
                </h1>
                <p className="mt-4 font-medium text-gray-500 transition-all duration-500 dark:text-gray-200 group-hover:text-gray-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore iusto animi maxime numquam nostrum laboriosam
                  officiis unde rerum, ea saepe?
                </p>
                <div className="mt-6">
                  <a href="#">
                    <ButtonFill>Learn More</ButtonFill>
                  </a>
                </div>
              </div>
            </motion.div>
            {/* box 4 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={provideInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative p-6 transition-all duration-500 bg-blue-800 rounded-md shadow cursor-pointer hover:bg-blue-600 group">
                <img
                  src="https://i.ibb.co/ZRQPXr95/s4.webp"
                  alt="s4"
                  border="0"
                />
                <h1 className="mt-5 text-xl font-semibold transition-all duration-500 group-hover:text-white">
                  Ai &amp; Machine Learning Integration
                </h1>
                <p className="mt-4 font-medium text-gray-500 transition-all duration-500 dark:text-gray-200 group-hover:text-gray-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore iusto animi maxime numquam nostrum laboriosam
                  officiis unde rerum, ea saepe?
                </p>
                <div className="mt-6">
                  <a href="#">
                    <ButtonFill>Learn More</ButtonFill>
                  </a>
                </div>
              </div>
            </motion.div>
            {/* box 5 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={provideInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="relative p-6 transition-all duration-500 bg-blue-800 rounded-md shadow cursor-pointer hover:bg-blue-600 group">
                <img
                  src="https://i.ibb.co/Q3MHPtw1/s5.webp"
                  alt="s5"
                  border="0"
                />
                <h1 className="mt-5 text-xl font-semibold transition-all duration-500 group-hover:text-white">
                  Android &amp; iOS App Development
                </h1>
                <p className="mt-4 font-medium text-gray-500 transition-all duration-500 dark:text-gray-200 group-hover:text-gray-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore iusto animi maxime numquam nostrum laboriosam
                  officiis unde rerum, ea saepe?
                </p>
                <div className="mt-6">
                  <a href="#">
                    <ButtonFill>Learn More</ButtonFill>
                  </a>
                </div>
              </div>
            </motion.div>
            {/* box 6 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={provideInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="relative p-6 transition-all duration-500 bg-blue-800 rounded-md shadow cursor-pointer hover:bg-blue-600 group">
                <img
                  src="https://i.ibb.co/N2J623Fx/s6.webp"
                  alt="s6"
                  border="0"
                />
                <h1 className="mt-5 text-xl font-semibold transition-all duration-500 group-hover:text-white">
                  3D Graphics &amp; Vector Designing
                </h1>
                <p className="mt-4 font-medium text-gray-500 transition-all duration-500 dark:text-gray-200 group-hover:text-gray-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore iusto animi maxime numquam nostrum laboriosam
                  officiis unde rerum, ea saepe?
                </p>
                <div className="mt-6">
                  <a href="#">
                    <ButtonFill>Learn More</ButtonFill>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Offerings */}
      <section className="p-6 bg-slate-900">
        <div>
          <Offerings />
        </div>
      </section>

      {/* How Can We Work */}
      <section className="p-10 bg-slate-50" ref={workRef}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={workInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-center text-[40px] text-[#151517] mb-8"
        >
          How Can We Work With You
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Software Development Outsourcing */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={workInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center p-6 transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <h1 className="mb-4 text-[#53aedb] text-[20px] font-semibold">
              Software Development Outsourcing
            </h1>
            <p className="text-[#151517]">
              We build your software from start to finish, letting you focus on
              your core business.
            </p>
          </motion.div>

          {/* Dedicated Teams */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={workInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center justify-center p-6 transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <h1 className="mb-4 text-[#53aedb] text-[20px] font-semibold">
              Dedicated Teams
            </h1>
            <p className="text-[#151517]">
              You get a fully committed team that integrates into your
              organization and culture.
            </p>
          </motion.div>

          {/* IT Staff Augmentation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={workInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center justify-center p-6 transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <h1 className="mb-4 text-[#53aedb] text-[20px] font-semibold">
              IT Staff Augmentation
            </h1>
            <p className="text-[#151517]">
              Fill skills gaps fast by bringing in qualified professionals
              whenever you need them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Successful Softwares */}
      <div className="pt-16 pb-16 bg-white" ref={sucessRef}>
        {/* ============ header =================== */}
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={sucessInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="uppercase text-lg sm:text-xl md:text-2xl font-bold text-[#53aedb]"
          >
            Softwares
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={sucessInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl mt-1 font-semibold text-[#151517]"
          >
            Driving Change with Innovative <br /> Successful Softwares
          </motion.h1>
        </div>
        {/* ============= card ============= */}
        <div className="w-[90%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {/* box 1 */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={sucessInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              className="p-6 bg-green-100 rounded-lg"
            >
              <img src="https://i.ibb.co/RRxrTP4/i1.webp" alt="i1" border="0" />
              <h1 className="text-xl mt-6 font-bold text-[#53aedb]">
                Best Marketing Software
              </h1>
              <p className="mt-3 font-medium text-gray-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae nobis natus esse! Earum, inventore porro
              </p>
            </motion.div>
          </div>
          {/* box 2 */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={sucessInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="p-6 bg-red-100 rounded-lg"
            >
              <img
                src="https://i.ibb.co/TBF0Jf1c/i2.webp"
                alt="i2"
                border="0"
              />
              <h1 className="text-xl mt-6 font-bold text-[#53aedb]">
                Product Sales Software
              </h1>
              <p className="mt-3 font-medium text-gray-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae nobis natus esse! Earum, inventore porro
              </p>
            </motion.div>
          </div>
          {/* box 3 */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={sucessInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 bg-green-100 rounded-lg"
            >
              <img
                src="https://i.ibb.co/B5JS0PjW/i3.webp"
                alt="i3"
                border="0"
              />
              <h1 className="text-xl mt-6 font-bold text-[#53aedb]">
                Best Marketing Software
              </h1>
              <p className="mt-3 font-medium text-gray-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae nobis natus esse! Earum, inventore porro
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <Newsletter />

      {/* Contact From */}
      <ContactForm />

      {/* Scrolltop */}
      <ScrollToTopButton />
    </>
  );
};

export default Hero;

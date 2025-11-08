/** @format */

import { useState } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const offeringsData = {
  services: {
    label: "Our Services",
    categories: [
      {
        title: "Development & QA",
        points: [
          "Ensuring Compatibility and Smooth Integration",
          "Careful Testing and Validation",
          "Providing a Smooth User Experience",
        ],
        description: [
          "Do you know why some software projects don't meet expectations? There are two possible reasons:",
          "You might be missing important steps in your development and QA processes, or you're doing things right, but others are doing them better.",
          "With over 17 years of experience, we’ve built processes that ensure scalable, robust, and user-friendly applications.",
        ],
      },
      {
        title: "Mobility & Apps",
        points: [
          "Developing Apps That Perform Best on Each Platform",
          "Hybrid App Development for Cross-Platform Solutions",
          "Web App Development and Progressive Web Apps (PWAs)",
        ],
        description: [
          "Creating mobile and web apps that perform, engage, and align with your business goals.",
          "We develop native, hybrid, and responsive web apps to maximize user reach and experience.",
        ],
      },
      {
        title: "IT Operations",
        points: [
          "Streamlining Development and Operations with DevOps",
          "Enhancing Security with Cybersecurity Services",
          "Designing Scalable and Reliable Infrastructure",
          "Providing Ongoing Technical Support",
        ],
        description: [
          "We offer complete IT services including DevOps, cybersecurity, scalable infrastructure, and ongoing support.",
        ],
      },
    ],
  },
  solutions: {
    label: "Our Solutions",
    categories: [
      {
        title: "Education Technology",
        points: [
          "Managed Hosting",
          "Open edX LMS Customization",
          "Instructional Design and Course Creation",
          "LMS Training and Support",
          "Data Migration & Custom LMS Platforms",
        ],
        description: [
          "Enhance the learning experience with full-service eLearning tech including Open edX, instructional design, and training.",
        ],
      },
      {
        title: "Data, ML & AI",
        points: [
          "Predictive Analysis",
          "Computer Vision",
          "Machine Learning & Deep Learning",
          "Business Intelligence",
          "NLP & Generative AI",
        ],
        description: [
          "Leverage data to gain insights, automate decisions, and innovate using AI/ML and data science.",
        ],
      },
      {
        title: "E-Commerce",
        points: [
          "eCommerce Development",
          "Voice Commerce",
          "AR Shopping",
          "AI Chatbots",
          "Customer Segmentation & Sentiment Analysis",
        ],
        description: [
          "Boost your online business with interactive, secure, and intelligent e-commerce tech solutions.",
        ],
      },
    ],
  },
};

const Offerings = () => {
  const [tab, setTab] = useState("services");
  const [activeIndex, setActiveIndex] = useState(0);

  const data = offeringsData[tab];
  const current = data.categories[activeIndex];

  // offer section
  const offerRef = useRef(null);
  const offerInView = useInView(offerRef, { once: true, margin: "-100px" });

  return (
    <section className="container px-4 py-8 mx-auto" ref={offerRef}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={offerInView ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="mb-4 text-2xl font-bold text-center md:text-3xl"
      >
        Our <span className="text-[#53aedb]">Offerings</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={offerInView ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-6 text-lg text-center"
      >
        From development to QA, IT operations to AI, our tech services are
        tailored to your needs.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={offerInView ? { opacity: 1, x: 0 } : {}}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex justify-center gap-4 mb-6">
          {Object.keys(offeringsData).map((key) => (
            <button
              key={key}
              onClick={() => {
                setTab(key);
                setActiveIndex(0);
              }}
              className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
                tab === key
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {offeringsData[key].label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {data.categories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveIndex(i)}
              className={`px-3 py-1 border rounded-md text-sm transition ${
                i === activeIndex
                  ? "bg-blue-500 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3 text-[#53aedb]">
            {current.title}
          </h3>
          <div className="space-y-2 text-gray-700">
            {current.description.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}
          </div>
          <ul className="pl-6 mt-4 space-y-1 text-gray-800 list-disc">
            {current.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Offerings;

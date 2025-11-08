/** @format */

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Newsletter = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterSuccess("Please enter a valid email.");
      return;
    }

    // Replace this with actual email processing logic (e.g. Mailchimp / Web3Forms)
    setNewsletterSuccess("Thanks for subscribing!");
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSuccess(""), 3000);
  };

  // Newsletter
  const newsRef = useRef(null);
  const newsInView = useInView(newsRef, { once: true, margin: "-100px" });

  return (
    <>
      <div
        className="flex flex-col items-start justify-between px-4 py-10 bg-black shadow-md sm:flex-row sm:items-center sm:px-8 md:px-16"
        ref={newsRef}
      >
        {/* Text Section */}
        <div className="max-w-md mb-6 sm:mb-0 sm:mr-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={newsInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="text-xl font-semibold text-[#53aedb] mb-2"
          >
            Stay Updated
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={newsInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="text-sm text-gray-300"
          >
            Submit your email to receive updates, services, or connect with us
            directly.
          </motion.p>
        </div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={newsInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="w-full sm:w-auto"
        >
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col items-stretch gap-2 sm:flex-row"
          >
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Email here"
              required
              className="w-full px-4 py-2 text-black border border-gray-300 rounded sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>

          {newsletterSuccess && (
            <p
              className={`text-sm mt-2 ${
                newsletterSuccess.includes("Thanks")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {newsletterSuccess}
            </p>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Newsletter;

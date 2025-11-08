/** @format */

import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CustomerSoftwareFrom = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    number: "",
    message: "",
    budget: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};

    if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters long.";

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Invalid email address.";

    if (!formData.service) newErrors.service = "Please select a service.";

    if (!formData.number || formData.number.replace(/\D/g, "").length < 10)
      newErrors.number = "Valid phone number required.";

    if (formData.message.length > 500)
      newErrors.message = "Message cannot exceed 500 characters.";

    if (!formData.budget) newErrors.budget = "Please select a budget.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setLoading(true);
    const formDataObj = new FormData();
    formDataObj.append("access_key", "276695ce-1e44-4cb0-bc1f-df51e6a92587");
    Object.entries(formData).forEach(([key, value]) =>
      formDataObj.append(key, value)
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const result = await response.json();

      if (result.success) {
        setSuccess("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          service: "",
          number: "",
          message: "",
          budget: "",
        });
      } else {
        setSuccess("Failed to send message. Please try again.");
      }
    } catch {
      setSuccess("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      {success && (
        <p
          className={`text-center text-sm font-medium mb-4 ${
            success.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {success}
        </p>
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={`w-full p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="flex-1">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`w-full p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <PhoneInput
            country={"ca"}
            value={formData.number}
            onChange={(phone) =>
              setFormData((prev) => ({ ...prev, number: phone }))
            }
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: false,
            }}
            inputClass="!w-full !text-black"
            specialLabel=""
            containerClass="w-full text-black"
          />
          {errors.number && (
            <p className="mt-1 text-sm text-red-500">{errors.number}</p>
          )}
        </div>

        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${
              errors.service ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="Customer Software Development">
              Customer Software Development
            </option>
          </select>
          {errors.service && (
            <p className="text-red-600 text-sm mt-1">{errors.service}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Please describe your project
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Details?"
            maxLength={500}
            className={`w-full p-3 border rounded-md text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
          <p className="text-xs text-gray-500 mt-1 text-right">
            {formData.message.length} / 500
          </p>
        </div>

        <div>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 ${
              errors.budget ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="" disabled>
              What is your budget?
            </option>
            <option value="Less than USD 50,000">Less than USD 50,000</option>
            <option value="USD 50,000 - USD 100,000">
              USD 50,000 - USD 100,000
            </option>
            <option value="USD 100,000 - USD 200,000">
              USD 100,000 - USD 200,000
            </option>
            <option value="USD 200,000 - USD 500,000">
              USD 200,000 - USD 500,000
            </option>
            <option value="Above USD 500,000">Above USD 500,000</option>
          </select>
          {errors.budget && (
            <p className="text-red-600 text-sm mt-1">{errors.budget}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full sm:w-32 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CustomerSoftwareFrom;

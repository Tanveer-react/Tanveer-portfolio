import { useState } from "react";
import emailjs from "@emailjs/browser";
import ParticleBackground from "../components/particalbackground";
import { easeInOut, motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_ID;

export default function Contact() {
  const social = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tanveer-khan-devolper/",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/Tanveer-react",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    Email: "",
    service: "",
    Budget: "",
    Idea: "",
  });

  const [status, setStatus] = useState("");
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (error[name]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const required = ["name", "Email", "service", "Idea"];
    const newError = {};

    required.forEach((field) => {
      if (!formData[field]?.trim()) {
        newError[field] = "Fill this field";
      }
    });

    if (formData.service !== "other" && !formData.Budget.trim()) {
      newError.Budget = "Fill this field";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          form_name: formData.name,
          reply_to: formData.Email,
        },
        PUBLIC_KEY
      );

      setStatus("success");

      setFormData({
        name: "",
        Email: "",
        service: "",
        Budget: "",
        Idea: "",
      });
    } catch (err) {
      console.error("Email error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-black overflow-hidden text-white py-20 px-20 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      <ParticleBackground />

      <div className=" relative z-10 w-full flex flex-col  md:flex-row items-center gap-10">
        <motion.div
          className="w-full md:w-1/2 bg-white/5  rounded-2xl p-8 border border-white/10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className=" text-3xl font-bold mb-6">Let's Work Together</h2>

          <form className=" flex flex-col gap-10" onSubmit={handleSubmit}>
            <div className=" flex flex-col">
              <label className=" mb-1">
                {" "}
                your Name <span className=" text-red-500"> *</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder=" Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className={` p-3 rounded-md bg-white/10 border ${
                  error.name ? "border border-red-500" : "border-gray-500"
                }`}
              />
              {error.name && (
                <p className=" text-red-500 text-x5">{error.name} </p>
              )}
            </div>

            <div className=" flex flex-col">
              <label className=" mb-1">
                Your Email <span className=" text-red-500"> *</span>
              </label>
              <input
                type="text"
                name="Email"
                placeholder=" Enter Your Email"
                value={formData.Email}
                onChange={handleChange}
                className={` p-3 rounded-md bg-white/10 border ${
                  error.Email ? "border border-red-500" : "border-gray-500"
                }`}
              />
              {error.Email && (
                <p className=" text-red-500 text-x5">{error.Email} </p>
              )}
            </div>

            <div className=" flex flex-col">
              <label className=" mb-1">
                Service Nedeed <span className=" text-red-500"> *</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={` p-3 rounded-md bg-white/10 border ${
                  error.service ? "border border-red-500" : "border-gray-500"
                }`}
              >
                <option value="" disabled className=" text-black">
                  Something In Mind
                </option>
                <option value="FrontEndDevolpment" className=" text-black">
                  FrontEnd Devolpment
                </option>
                <option value="others" className=" text-black">
                  others
                </option>
              </select>
              {error.service && (
                <p className=" text-red-500 text-x5">{error.service} </p>
              )}
            </div>

            {formData.service && formData.service !== "others" && (
              <div className=" flex flex-col">
                <label className=" mb-1">
                  Your Budget <span className=" bg-red-500"> *</span>
                </label>
                <input
                  type="text"
                  name="Budget"
                  placeholder=" Enter Your Email"
                  value={formData.Budget}
                  onChange={handleChange}
                  className={` p-3 rounded-md bg-white/10 border ${
                    error.Budget ? "border border-red-500" : "border-gray-500"
                  }`}
                />
                {error.Budget && (
                  <p className=" text-red-500 text-x5">{error.Budget} </p>
                )}
              </div>
            )}

            <div className=" flex flex-col">
              <label className=" mb-1">
                Your idea <span className=" text-red-500"> *</span>
              </label>
              <textarea
                name="Idea"
                placeholder=" Gives yours FeedBack"
                rows={5}
                value={formData.Idea}
                onChange={handleChange}
                className={` p-3 rounded-md bg-white/10 border ${
                  error.Idea ? "border border-red-500" : "border-gray-500"
                }`}
              />
              {error.Idea && (
                <p className=" text-red-500 text-x5">{error.idea} </p>
              )}
            </div>

            {status && (
              <p
                className={` text-sm ${
                  status === "success"
                    ? "text-green-400"
                    : status === "error"
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {status === "sending"
                  ? "sending..."
                  : status === "success"
                  ? "Message sent succesfully"
                  : "something went wrong"}
              </p>
            )}

            <motion.button
              className=" bg-blue-600 hover:bg-blue-700 disabled:opacity-60  text-white py-3 rounded-md transition font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === "sending"}
              type="submit"
            >
              {status === "sending" ? "sending..." : "send message"}
            </motion.button>
          </form>
        </motion.div>
        <motion.div
          className=" ml-30 w-full md:w-1/2 flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="flex gap-3 text-2xl font-bold">
              {" "}
              <span className=" font-bold text-white text-2xl">
                <FaLocationDot />
              </span>
              Location{" "}
            </h1>
            <p className="text-1xl m-8">New Garden Twon Lahore</p>
          </div>
          <div>
            <h1 className="flex mt-6 gap-3 text-2xl font-bold">
              {" "}
              <span className=" font-bold text-white text-2xl">
                <FaPhoneVolume />
              </span>
              Phone Number{" "}
            </h1>
            <p className="text-1xl m-8">+92 3456780990</p>
          </div>
          <div>
            <h1 className="flex  mt-6 gap-3 text-2xl font-bold">
              {" "}
              <span className=" font-bold text-white text-2xl">
                <CgMail />
              </span>
              Email{" "}
            </h1>
            <p className="text-1xl m-8">Ali456@gmail.com</p>
          </div>
          <div className="m-6 flex gap-7 text-2xl md:text-3xl justify-center lg:justify-start">
            <h1>Follow </h1>
            {social.map(({ icon: Icon, label, href }) => (
              <motion.a
                href={href}
                key={label}
                target="_blank"
                aria-label={label}
                rel="noopener noreferrer"
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="text-gray-300 flex-row"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
          {/* <img src={contact} alt="contact" 
className=" w-70 md:w-140  shadow-lg object-cover border-2 rounded-4xl"
animation={{y:[0,-10,0]}}
transition={{duration:2,repeat:Infinity,ease:"easeInOut"}}
/> */}
        </motion.div>
       
      </div>
    <div>
       
    </div>
    </section>
   
  );
}

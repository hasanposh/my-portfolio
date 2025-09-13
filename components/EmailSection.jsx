"use client";
import React, { useState } from "react";
import Link from "next/link";
import Lottie from "react-lottie-player";

import hiAnimation from "../public/hiAnimation.json";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const EmailSection = () => {
  const [status, setStatus] = useState({ submitting: false, success: null, error: "" });
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: "" });

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus({ submitting: false, success: true, error: "" });
        resetForm();
      } else {
        setStatus({ submitting: false, success: false, error: result.message || "Failed to send email" });
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: "Something went wrong. Please try again." });
      console.error("Fetch error:", err);
    }
  };

  return (
    <section className="my-8 md:my-8" id="contact">
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-8">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-4 relative py-8 sm:py-16">
        {/* Left Column */}
        <div>
          <h5 className="text-xl font-bold text-white my-2">Lets Connect</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-xl text-justify">
            My inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!
          </p>

          <div className="flex flex-row gap-2 mb-4">
            <Link href="https://www.facebook.com/hasan.mahmud.14203544" target="_blank">
              <BsFacebook className="text-2xl hover:text-primary-600 transition transform hover:scale-105" />
            </Link>
            <Link href="https://github.com/hasanposh" target="_blank">
              <BsGithub className="text-2xl hover:text-primary-600 transition transform hover:scale-105" />
            </Link>
            <Link href="https://www.linkedin.com/in/mdhasanmahmud104/" target="_blank">
              <BsLinkedin className="text-2xl hover:text-primary-600 transition transform hover:scale-105" />
            </Link>
          </div>

          <div className="flex justify-center mt-4">
            <Lottie loop animationData={hiAnimation} play style={{ width: 250, height: 250 }} />
          </div>
        </div>

        {/* Right Column Form */}
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 bg-secondary-950 border border-[#33353F] placeholder-white text-gray-100 text-sm rounded-lg w-full p-2.5"
            />

            <input
              type="text"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mb-4 bg-secondary-950 border border-[#33353F] placeholder-white text-gray-100 text-sm rounded-lg w-full p-2.5"
            />

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mb-4 bg-secondary-950 border border-[#33353F] placeholder-white text-gray-100 text-sm rounded-lg w-full p-2.5"
            />

            {/* Success/Failure messages */}
            {status.success && <p className="text-green-500 mb-4 text-center">Email sent successfully!</p>}
            {status.error && <p className="text-red-500 mb-4 text-center">{status.error}</p>}

            <button
              type="submit"
              disabled={status.submitting}
              className="bg-primary-700 hover:bg-primary-900 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;

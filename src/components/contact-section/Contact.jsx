import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  console.log(formData);

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    try {
      if (!formData.name || !formData.email || !formData.message) {
        return alert("One of fields value is missing");
      } else {
        return alert("form has been submitted");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section id="contact" className="md:w-[80%] w-[90%] mx-auto mb-12">
      <h1 className="mt-12 text-xl font-bold">Let's Talk</h1>
      <p className="my-8 text-lg">
        Feel free to contact me. Let me know how can I help you in the best way.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <form
          onSubmit={SubmitForm}
          className="flex flex-col gap-3 p-4 border border-gray-600 md:w-1/2"
        >
          <input
            id="name"
            className="border-b p-2 outline-none border-gray-400"
            type="text"
            placeholder="Your Name"
            onChange={handleFormDataChange}
          />
          <input
            id="email"
            className="border-b p-2 outline-none border-gray-400"
            type="email"
            placeholder="Email"
            onChange={handleFormDataChange}
          />

          <textarea
            className="border p-4 outline-none border-gray-400"
            type="text"
            placeholder="Leave your message"
            id="message"
            onChange={handleFormDataChange}
          />
          <button
            type="submit"
            className="border-none px-4 py-2 bg-blue-950 text-white rounded"
          >
            Send
          </button>
        </form>

        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-xl font-bold">| OTHER WAYS TO CONTACT</h1>

          <div className="flex items-center gap-2 justify-center p-4 rounded-lg bg-gray-300 md:w-[70%]">
            <BsFillTelephoneFill />
            <a href="tel:+8700396049">+91 8700-39-6049</a>
          </div>

          <div className="flex items-center gap-2 justify-center p-4 rounded-lg bg-gray-300 md:w-[80%]">
            <IoMailOutline />
            <a href="mailto:kadyannehal333@gmail.com">
              kadyannehal333@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { type FormEvent } from "react";
import { LiaLocationArrowSolid } from "react-icons/lia";
const Contact = ({
  onFormSubmit,
}: {
  onFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <section id="contact" className="py-8">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-md sm:text-2xl hover:text-teal-500">
          Contact Us:
          <LiaLocationArrowSolid className="transform rotate-90 inline-block" />
        </h2>
        <div className="max-w-lg mx-auto text-center">
          <p className="text-gray-300 font-bold text-sm sm:text-xl mb-4">
            I'm currently available for freelance work and open to new
            opportunities. If you have a project in mind or just want to say
            hello, feel free to reach out!
          </p>
          <form id="contact-form" className="space-y-6" onSubmit={onFormSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
            ></textarea>
            <button
              type="submit"
              className="btn hover:bg-teal-500 btn-primary w-full border p-2 rounded-lg border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
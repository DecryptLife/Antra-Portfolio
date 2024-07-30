function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container section-container">
        <div className="section-header">
          <h1 className="section-header-text">Ways to Connect with Me</h1>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <p>
              <b>
                Thank you for your interest in going through my profile. Your
                feedbacks, suggestions and questions are always welcome.If you
                wish to reach out to me feel free to email me directly at <br />
                <a href="mailto:bt22@rice.edu">bt22@rice.edu</a> I make an
                effort to respond to all messages within 24 hours, although it
                may take me longer during busy periods. Finally, if you prefer
                to connect on social media, you can find me on . I post regular
                updates and engage with my followers there, so don't hesitate to
                reach out. Thanks again for your interest, and I look forward to
                hearing from you!
              </b>
            </p>

            <div className="social-media-icons">
              <a href="https://www.linkedin.com/in/benson-engineered/">
                <img src="./linkedin.svg"></img>
              </a>
              <a href="https://github.com/DecryptLife">
                <img src="./github.svg"></img>
              </a>
              <a href="mailto:bt22@rice.edu">
                <img src="./gmail.svg"></img>
              </a>
            </div>
          </div>
          {/* <div className="contact-form-layout">
            <form netlify name="contact" className="contact-form">
              <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                Hire Me
              </h2>
              <p className="leading-relaxed mb-5">
                Thank you for your interest in going through my profile. Your
                feedbacks, suggestions and questions are always welcome. If you
                wish to connect with me feel free to email me directly at
                bt22@rice.edu
              </p>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;

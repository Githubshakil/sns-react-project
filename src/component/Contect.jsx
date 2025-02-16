import React from "react";

const Contect = () => {
  return (
    <section className="contect">
      <div className="container">
        <div className="title">
          <h6 className="poppins-medium">Contact with us</h6>
          <h2 className="poppins-semibold">Get in Touch with Us</h2>
          <p className="poppins-regular">
            Lorem ipsum dolor sit amet consectetur. Aliquam nisl at nec in
            pretium morbi integer sagittis. Eu quam nec egestas .
          </p>
        </div>
        <div className="sidebyside">
          <div className="left">
            <h3 className="poppins-medium">How Can We Help You?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquet consectetur nullam
              phasellus sit suspendisse.
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-envelope"></i>
                abc.support@gmail.com
              </li>
              <li>
                <i className="fa-solid fa-phone"></i> 012345678989
              </li>
            </ul>
            <p>
              <b>Note:</b> Our dedicated support team is available to assist you
              with any questions or concerns.
            </p>
          </div>
          <div className="right">
            <div className="formcontainer">
              <h3 className="poppins-medium">
                We’re Here to Answer Your Questions
              </h3>
              <form>
                <label className="poppins-semibold">Name</label>
                <input type="text" />
                <label className="poppins-semibold">Email</label>
                <input type="email" />
                <label className="poppins-semibold">Subject</label>
                <input type="text" />
                <label className="poppins-semibold">Message</label>
                <input type="text" />
                <button>
                  Submit <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contect;

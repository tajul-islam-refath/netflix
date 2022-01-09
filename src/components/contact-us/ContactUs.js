import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import "./contact-us.scss";

const ContactUs = () => {
  //const [data, setData] = useState([]);

  const [inbox_name, setInboxName] = useState("");
  const [inbox_email, setInboxEmail] = useState("");
  const [inbox_subject, setInboxSubject] = useState("");
  const [inbox_message, setInboxMessage] = useState("");
  //const [loader, setLoader] = useState(false);

  // useEffect(() => {
  //   getData();
  // }, []);

  //   async function inboxAdd(e) {
  //     e.preventDefault();
  //     setLoader(true);

  //     const formData = new FormData();
  //     formData.append("inbox_name", inbox_name);
  //     formData.append("inbox_email", inbox_email);
  //     formData.append("inbox_subject", inbox_subject);
  //     formData.append("inbox_message", inbox_message);

  //     let result = await fetch("inboxAdd", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     result = await result.json();

  //     if (result.success) {
  //       toast.success(result.success);
  //       setInboxName("");
  //       setInboxEmail("");
  //       setInboxSubject("");
  //       setInboxMessage("");
  //       setLoader(false);
  //     } else {
  //       toast.error(result.error);
  //       setLoader(false);
  //     }
  //   }

  // function getData() {
  //   axios
  //     .get(AppUrl.base_url + "aboutGet")
  //     .then(function (response) {
  //       if (response) {
  //         setData(response.data);

  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  return (
    <>
      <section className="contact_section">
        <h2 className="contact_us_text" data-aos="fade-down" data-aos-delay="0">
          Contact Us
        </h2>
        <img className="contact_map" src="images/contact_map.png" alt="map" />
        <img
          className="contact_location"
          src="images/location.png"
          alt="location"
        />
        <div className="contact_inside container">
          <div
            className="contact_form"
            data-aos="fade-right"
            data-aos-delay="0"
          >
            <p className="contact_form_text">Contact Form</p>
            <input
              type="text"
              className="contact_full_name"
              placeholder="Full Name"
              value={inbox_name}
              onChange={(e) => setInboxName(e.target.value)}
            />
            <input
              type="text"
              className="contact_email"
              placeholder="Enter Your Email"
              value={inbox_email}
              onChange={(e) => setInboxEmail(e.target.value)}
            />
            <input
              type="text"
              className="contact_subject"
              placeholder="Subject"
              value={inbox_subject}
              onChange={(e) => setInboxSubject(e.target.value)}
            />
            <textarea
              name="contact_message"
              className="contact_message"
              id="contact_message"
              cols="30"
              rows="4"
              placeholder="Type your message"
              value={inbox_message}
              onChange={(e) => setInboxMessage(e.target.value)}
            ></textarea>

            <div className="contact_form_btn_div">
              {/* {loader === true ? (
                <>
                  <div class="spinner-border"></div>
                </>
              ) : (
                <> */}
              <a
                href="!#"
                className="contact_form_btn"
                // onClick={(e) => inboxAdd(e)}
              >
                Send Message
              </a>
              {/* </>
              )} */}
            </div>
          </div>

          <div
            className="contact_get_in_touch"
            data-aos="fade-left"
            data-aos-delay="0"
          >
            <p className="contact_get_in_touch_text">Get In Touch</p>
            <div className="contact_phone_div">
              <span className="contact_phone_icon_span">
                <BsTelephoneFill className="contact_phone_icon" />
              </span>
              {/* {data.map((item) => ( */}
              <span className="contact_phone">01841-993788</span>
              {/* ))} */}
            </div>

            <div className="contact_email_div">
              <span className="contact_email_icon_span">
                <FaEnvelope className="contact_email_icon" />
              </span>
              {/* {data.map((item) => ( */}
              <span className="contact_email_text">icinemabd@gmail.com</span>
              {/* ))} */}
            </div>

            <div className="contact_location_div">
              <span className="contact_location_icon_span">
                <MdLocationOn className="contact_location_icon" />
              </span>
              {/* {data.map((item) => ( */}
              <span className="contact_location_text">
                BTI Landmark, 16 Gulshan Avenue
              </span>
              {/* ))} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

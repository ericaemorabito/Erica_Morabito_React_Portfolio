import "./styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, transform } from 'framer-motion';

const contactVariants = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  visible: {
    opacity: 1,
    x: 0,
    type: 'spring',
    transition: { duration: 0.5 }
  },
  hover: {
    scale: 1.3
  }
};

const emailVariants = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  visible: {
    opacity: 1,
    x: 0,
    type: 'spring',
    transition: { delay: 0.5, duration: 0.5}
  },
  hover: {
    scale: 1.3
  }
};



function Contact() {
  const emailSender = document.getElementById('email');
  const emailBody = document.getElementById('message');
  const emailSubject = document.getElementById('subject');

  return (
    <section className="contact section" id="contact">
      <div className="row contact-row">
        {/* Left contact information */}
        <div className="col-12 contact-contents">
          <motion.h1 className="mt-5 fs-1"
          variants={contactVariants}
          initial="hidden"
          animate="visible">Get in touch</motion.h1>
          <motion.div className="contact-items"
          variants={contactVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover">
            <FontAwesomeIcon
              icon="fa-solid fa-envelope"
              className="contact-icon"
            />
            <a href="mailto:ericaemorabito@gmail.com" target="_blank" className="text-dark text mb-0">Email</a>
          </motion.div>
          <motion.div className="contact-items"
          variants={contactVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover">
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="contact-icon"
            />
             <a href="https://www.linkedin.com/in/erica-morabito/" target="_blank" className="text-dark text mb-0">LinkedIn</a>
          </motion.div>
          <motion.div className="contact-items"
          variants={contactVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover">
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="contact-icon"
            />
            <a href="https://github.com/ericaemorabito" target="_blank" className="text-dark text">Github</a>
          </motion.div>
        </div>


        {/* Right Form */}
{/* 
        <motion.div className="col-6 contact-form" id="email-form"
        variants={emailVariants}
        initial="hidden"
          animate="visible">
          <h2 className="mt-5 fs-1">Send an Email</h2>
          {/* `mailto:ericaemorabito@gmail.com?subject=${}&body=${}` */}
          {/* <form action="mailto:ericaemorabito@gmail.com?subject${}=" method="get">
          <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="jbond@007.com"
              />
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="subject"
                class="form-control"
                id="subject"
                placeholder="Exciting New Project"
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <input
                type="message"
                class="form-control"
                id="message"
                placeholder="Message"
              />
            </div>
            <button type="submit" className="button-17" id="send-btn">
              Send
            </button>
          </form>
        </motion.div> */}


      </div>
    </section>
  );
}

export default Contact;

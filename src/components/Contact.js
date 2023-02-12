import "./styles/contact.css";

function Contact() {
  return (
    <section className="contact section" id="contact">

      <div className="row contact-row">


        {/* Left Information */}
        <div className="col-6 contact-contents">
          <h1 className="mt-5 fs-1">Get in touch</h1>
            <p>Email</p>
            <p>LinkedIn</p>
            <p>Github</p>
          </div>
        

        {/* Right Form */}
        <div className="col-6 contact-form" id="email-form">
          {/* <div className="col-10"> */}
          <h2 className="mt-5 fs-1">Send an Email</h2>
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="James"/>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" placeholder="jbond@007.com"/>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <input type="message" class="form-control" id="message" placeholder="Message"/>
            </div>
            <button type="submit" class="button-17" id="email-btn">Send</button>
          </form>
          {/* </div> */}
        </div>

        </div>
    </section>
  );
}

export default Contact;

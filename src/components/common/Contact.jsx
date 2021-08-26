import React from "react";

const Contact = () => {
  return (
    <section className="context">
      <h1>Contact us through our email given below</h1>
      <section>shop.info@gmail.com</section>
      <form className="form1">
        <br></br>
        <label>First Name {""}</label>
        <input type="text" />
        <br></br>
        <br></br>
        <label>Last Name {""}</label>
        <input type="text" />
        <br></br>
        <br></br>
        <textarea rows="5" cols="50" name="description">
          Write to us
        </textarea>
        <br></br>
        <button type="submit" className="form1" id="one">
          Submit
        </button>
      </form>
    </section>
  );
};
export default Contact;

import React, {  useRef } from "react";
import "./Register.css";
import axios from "axios";
import logo from "../Image/contact-img.svg";

export default function Login() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const phonenumberrRef = useRef();
  const emailRef = useRef();
  const descRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/register", {
        firstname: firstnameRef.current.value,
        lastname: lastnameRef.current.value,
        phonenumber: phonenumberrRef.current.value,
        email: emailRef.current.value,
        desc: descRef.current.value,
      });
      console.log(res);
      alert(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const clickClear = (e) => {
    e.preventDefault();
    firstnameRef.current.value = "";
    emailRef.current.value = "";
    lastnameRef.current.value = "";
    phonenumberrRef.current.value = "";
    descRef.current.value = "";
  };
  return (
    <div class="contact" id="contact">
      <h1 class="heading">
        <span>C</span>
        <span>O</span>
        <span>N</span>
        <span>T</span>
        <span>A</span>
        <span>C</span>
        <span>T</span>
        {/* INFO */}
      </h1>

      <div class="row">
        <div class="col image">
          <img src={logo} alt="" />
        </div>
        <div class="col info">
          <form action="" onSubmit={handleSubmit}>
            <div className="content">
              <h1>
                <p className="title"> Welcome to the internship program</p>
              </h1>
              <h4>
                <p> Please let us know so we can contact you</p>
              </h4>
            </div>

            <div class="inputBox">
              <input type="text" placeholder="Fisrt Name" ref={firstnameRef} />
              <input type="text" placeholder="Last Name" ref={lastnameRef} />
            </div>
            <div class="inputBox">
              <input
                type="email"
                placeholder="Your Email"
                ref={emailRef}
              ></input>
              <input
                type="text"
                placeholder="Phone Number"
                ref={phonenumberrRef}
              />
            </div>
            <textarea
              placeholder="Message"
              name=""
              id=""
              cols="30"
              rows="10"
              ref={descRef}
            />
            <input type="submit" class="btn" value="Send message" />
            <input
              type="submit"
              class="btn"
              value="Clear"
              onClick={clickClear}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

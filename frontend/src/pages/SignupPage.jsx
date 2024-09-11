import React, { useState,useEffect } from 'react';
import { sendLoginRequest } from '../API';
import "../assets/SignupPage.css";
import { FaUser, FaEye, FaEyeSlash,FaEnvelope, FaCheck } from 'react-icons/fa';


const Carousel = () =>{
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      content: 'Explore my Website',
      backgroundUrl: 'https://img.freepik.com/free-vector/realistic-white-monochrome-background_52683-65345.jpg?t=st=1725513906~exp=1725517506~hmac=0104057938f98beef73361005999161df7cf0816ea73b255659762d63cc4831b&w=996'
    //   -webkit-transition: background 200ms ease-in-out;
      
    },
    {
      content: 'Endless Creativity and Harmony',
      backgroundUrl:'https://img.freepik.com/premium-photo/background-wall_884653-6119.jpg?w=740'
    },
    {
      content: 'For more information',
      backgroundUrl: 'https://img.freepik.com/premium-photo/white-abstract-object-with-white-sphere-it_1268796-218.jpg?w=826'
    },
  ];
  const handleDotClick = (index) =>{
    setActiveSlide(index)
  }

  return(
    <div className = "signuppage__extended"
      /*Apply the background*/ style = {{backgroundImage: `url(${slides[activeSlide].backgroundUrl})`}} /*Truy xuat trong array slides*/
    >
      <div className = "carousel">
        <ul className = "slides">
          {slides.map((slide, index) => ( //Pass in the variable slides and index  durig each iteractio create a li
              <li key = {index} className = {`slide ${activeSlide === index ? `active`: ``}`}>
                  {slide.content} 
              </li>
          ))}
        </ul>
        <div className = "dots-container">
            {slides.map((_, index) =>(
              <button key = {index} className = {`dots ${activeSlide === index ?`dot-active`: ``}`}
                      onClick ={() => handleDotClick(index)}
                      style = {{backgroundColor: `${activeSlide === index ? `black`: ``}` }}
              >
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      username: username,
      password: password,
    };

    const response = await sendLoginRequest(loginData);

    if (response.success) {
      localStorage.setItem("UserID", response.userID);
      localStorage.setItem("username", loginData.username);
      localStorage.setItem("password", loginData.password);
    } else {
      console.log("You are a failure!");
    }
  };

  
  
  return (
    <div className="signuppage__signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <div className="signuppage__input-container">
            <input
              className="username"
              name="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser style={{ color: 'grey' }} className="input-icon" />
        </div>
        <div className="signuppage__input-container">
            <input
              className="email"
              name="username"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope style={{ color: 'grey' }} className="input-icon" />
        </div>
        <div className="signuppage__input-container">
            <input
              className="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaEye style={{ color: 'grey' }} className="input-icon" />
        </div>
        <div className="signuppage__input-container">
            <input
              className="confirm-password"
              name="confirm-password"
              type="text"
              placeholder="Confirm password"
            //   value={username}
            //   onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaCheck style={{ color: 'grey' }} className="input-icon" />
        </div>
        
          <div className="signuppage__remember-me-container">
            <label htmlFor="remember-me">
              <svg
                className={`signuppage__checkbox ${
                  isChecked ? "signuppage__checked--active" : ""
                }`}
                aria-hidden="true"
                viewBox="0 0 15 11"
                fill="none"
              >
                <path
                  d="M1 4.5L5 9L14 1"
                  strokeWidth="2"
                  stroke={isChecked ? "#fff" : "none"}
                />
              </svg>
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                onChange={() => setIsChecked(!isChecked)}
                checked={isChecked}
              />
              
            </label>
            <p><span>I agree with the Terms and Conditions of iDraw Platform and responsible for the information provided in this page</span>
            </p>
        </div>
        <div className="signuppage__button-container">
          <button className="signuppage__button" type="submit">Sign Up</button>
        </div>
        <div className = "signuppage__dont-have-account-container">
          <p>Already have an account? <span>Login now</span></p>
        </div>
      </form>
      <Carousel/>
    </div>
  );
};

export default LoginForm;

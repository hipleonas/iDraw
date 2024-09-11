import React, { useState,useEffect } from 'react';
import { sendLoginRequest } from '../API';
import "../assets/LoginPage.css";
import { FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import slide1 from '../assets/Image Slide/nebula.png';
import slide2 from '../assets/Image Slide/slide2.png';
import slide3 from '../assets/Image Slide/slide3.png';

const Carousel = () =>{
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      content: 'Explore my Website',
      backgroundUrl: 'https://img.freepik.com/free-vector/white-monochrome-background_52683-67154.jpg?t=st=1725380441~exp=1725384041~hmac=9cea6c8525df0953c0a30d635d4ebcacf3a280ce72bf23a5cfa9f29cda9e581d&w=996'
    },
    {
      content: 'Endless Creativity and Harmony',
      backgroundUrl: 'https://img.freepik.com/free-vector/realistic-white-monochrome-background_52683-67810.jpg?t=st=1725381894~exp=1725385494~hmac=47ad373ba759da1b2d4a8c26614e09bdb3d98c77d1eb9871834bf955e7b4fbb1&w=996'
    },
    {
      content: 'For more information',
      backgroundUrl: 'https://img.freepik.com/free-vector/abstract-background-with-white-gradient-wave-design_1048-13703.jpg?t=st=1725380556~exp=1725384156~hmac=a5ecfc97256394802debdccfbdceaccd00f21f7247e620d3d7aee3556ace6c13&w=900',
    },
  ];
  const handleDotClick = (index) =>{
    setActiveSlide(index)
  }

  return(
    <div className = "loginpage__extended"
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

const LoginPage = () => {
  const [username, setUsername] = useState('');
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
    <div className="loginpage__login-container">
      <Carousel/>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="loginpage__username-container">
          <h3>Username</h3>
          <div className="loginpage__username-input-container">
            <input
              className="username"
              name="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser style={{ color: 'grey' }} className="user-icon" />
          </div>
        </div>
        <div className="loginpage__password-container">
          <h3>Password</h3>
          <div className="loginpage__password-input-container">
            <input
              className="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaEye style={{ color: 'grey' }} className="password-icon" />
          </div>
        </div>
        <div className = "loginpage__remember_n_forgot_password">
          <div className="loginpage__remember-me-container">
            <label htmlFor="remember-me">
              <svg
                className={`loginpage__checkbox ${
                  isChecked ? "loginpage__checked--active" : ""
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
            <span>Remember me</span>

          </div>
          <div className = "loginpage__forgot-password-container">
              <p><a>Forgot Password?</a></p>
          </div>
        </div>
        <div className="loginpage__button-container">
          <button className="loginpage__button" type="submit">Login</button>
        </div>
        <div className = "loginpage__dont-have-account-container">
          <p>Don't have an account? <span>Sign up now</span></p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

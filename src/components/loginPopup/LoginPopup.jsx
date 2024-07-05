// import React from "react";
// import "./LoginPopup.css";
// import { assets } from "../../assets/assets";

// const LoginPopup = () => {
//   return (
//     <div className="login-popup">
//       <form className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>Login</h2>
//           <img src={assets.cross_icon} alt="" />
//         </div>
//         <div className="popup">
//           <input type="text" placeholder="Your name" required />
//           <input type="email" placeholder="Your email" required />
//           <input type="password" placeholder="password" required />
//         </div>
//         <button>Login</button>
//         <div className="login-popup-condition">
//           <input type="checkbox" required />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>
//         <p>
//           Create a new account? <span>Click here</span>
//         </p>
//         <p>
//           Already have an account? <span>Login here</span>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPopup;

import React from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const LoginPopup = ({ handleClose }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/users/read");
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>Login</h2>
          <img src={assets.cross_icon} alt="close" onClick={handleClose} />
        </div>
        <div className="login-popup-inputs">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">Login</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        <p>
          Create a new account? <span>Click here</span>
        </p>
        <p>
          Already have an account? <span>Login here</span>
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;

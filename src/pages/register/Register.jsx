import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SheshBook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SheshBook.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input type="gmail"placeholder="Email" className="loginInput" />
            <input type="password" placeholder="Password" className="loginInput" />
            <input type="password" placeholder="Password Again" className="loginInput" />
            <Link to={'/'} style={{textAlign:'center'}}><button className="loginButton">Sign Up</button></Link>
           <Link to={"/Login"} style={{textAlign:'center'}}> <button className="loginRegisterButton">
              Log into Account
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

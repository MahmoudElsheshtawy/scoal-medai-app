/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import "./login.mdule.css";

export default function Login() {
  return (

                <div className="contaner" style={{backgroundColor:'azure', display:'flex' ,justifyContent:'center',width:'100%',height:'100vh',alignItems:'center'}}>
                      <form >
                        <p className="logo1">SheshBook </p>
                         <input type="email"  placeholder="Email" required=""/>
                         <input type="password" placeholder="Password" required=""/>
                    
                           <Link to={'/'}><button className="login1" type="submit">Log In</button></Link>
                           <a href="#">Forgot Password ?</a>
                            <hr/>
                           <Link to={'/Register'}><button className="create-account">Create New Account</button></Link>
                      </form>
                </div>
  )
}

import { Link } from "react-router-dom";
import "./login.mdule.css";

export default function Login() {
  return (

                <div className="contaner" style={{backgroundColor:'azure', display:'flex' ,justifyContent:'center',width:'100%',height:'100vh',alignItems:'center'}}>
                
                      <form >
                    <p class="logo1">SheshBook </p>
                    <input type="email"  placeholder="Email" required=""/>
                    <input type="password" placeholder="Password" required=""/>
                    
                    <Link to={'/'}><button class="login1" type="submit">Log In</button></Link>
                       <a href="#">Forgot Password ?</a>
                    <hr/>
                    <Link to={'/Register'}><button class="create-account">Create New Account</button></Link>
                     </form>
                
                </div>
  )
}

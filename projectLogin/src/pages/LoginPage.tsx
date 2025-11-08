import '../App.css'
import logo from './logo.png'

export function LoginPage(){
  
  return (
  
    <div className="flex h-screen  flex-col flex-center relative">
      <div className=" py-18 px-15 bg-darkgrey flex flex-col shadow-xl rounded-xl border-darkorangeplus relative  ">

        <img src={logo} className=' absolute w-1/6 h-1/4  top-1 right-1  '></img>
        <p className='loginText'>Email</p> 
        <input className="loginInput " type="email" placeholder='Email' id='email' ></input>
        <p className='loginText'>Password</p> 
        <input className="loginInput " placeholder='Password' id='password'  ></input>
        <button className='loginButton '>Sign In</button>
      </div>
    </div>
    
  )
}

export default LoginPage  
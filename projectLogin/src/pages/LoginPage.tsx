import '../App.css'
import logo from './logo.png'

export function LoginPage(){
  
  return (
  
    <div className="flex h-screen  flex-col flex-center relative">
      <div className=" pt-18 pb-6 px-15 bg-darkgrey flex flex-col shadow-xl rounded-xl border-darkorangeplus relative  ">

        <img src={logo} className=' absolute w-1/6 h-1/4 max-sm:scale-65 max-md:scale-75 max-xs:scale-55 top-1 right-1  '></img>
        <p className='loginText'>Email</p> 
        <input className="loginInput " type="email" placeholder='Email' id='email' ></input>
        <p className='loginText'>Password</p> 
        <input className="loginInput " placeholder='Password' id='password'  ></input>
        <button className='loginButton '>Sign In</button>
        <div className="flex flex-center m-10">
          <a className='loginOtherOptions  xl:pr-32 lg:pr-24 md:pr-18 sm:pr-8 xs:pr-5 2xs:pr-3 ' href=''>Don't have an account?</a>
          
          <a className='loginOtherOptions 2xs:pl-[2px] ' href='https://www.youtube.com/watch?v=CQytFzhOxR8' target='_blank'>Forgot password?</a>
        </div>
      </div>
    </div>
    
  )
}

export default LoginPage  
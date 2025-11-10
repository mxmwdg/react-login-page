import '../App.css'
import logo from './logo.png'
import { useState ,useRef } from 'react'
//import axios from 'axios'



export function LoginPage(){
  
  const emailInput = useRef<HTMLInputElement | null>(null)
  const passwordInput = useRef<HTMLInputElement | null>(null)

  const [ eletter, setEmail] = useState<string>("");
  const [ pletter, setPassword] = useState<string>("");
  const [ pError, setPasswordError] = useState<boolean>(false);
  const [ eError, setEmailError] = useState<boolean>(false);
  const [ errorMessage, setErrorMessage] = useState<string>('');




  function returnResult(){
    if(pletter.length < 8){
      togglePasswordError(true);
      setErrorMessage("")
    }
    if(eletter.length < 8 ){
      toggleEmailError(true);
      setErrorMessage("")
    }
    if(!eletter.includes("@") ){
      toggleEmailError(true);
      setErrorMessage("")
    }
  }

  function submit(){
    returnResult()
    console.log(eletter)
    console.log(pletter)
  }
  const captureInputChange = (event: React.ChangeEvent<HTMLInputElement>, id:string) => {
    
    
    if(id === "email"){
      setEmail(event.target.value)
    }
    else if( id === "password"){
      setPassword(event.target.value)
      togglePasswordError(false);
    }
    
  }
  const captureInput = (event: React.KeyboardEvent<HTMLInputElement>, nextRef: React.RefObject<HTMLInputElement | null> , isLastRef:boolean) => {
    if(event.key === "Enter"){
      event.preventDefault();
      nextRef.current?.focus();
      if (isLastRef === true) {
        submit(); 
      }
    }
  } 
  
  function togglePasswordError(error:boolean){
    setPasswordError(error)
  }
  function toggleEmailError(error:boolean){
    setEmailError(error)
  }
      
  

  return (
  
    <div className="flex h-screen  flex-col flex-center relative">
      <div className=" pt-18 pb-6 px-15 bg-darkgrey flex flex-col shadow-xl rounded-xl border-darkorangeplus relative  ">
        <a href='https://www.youtube.com/watch?v=G4CKmzBf5Cs&list=RDG4CKmzBf5Cs&start_radio=1&t=521s' target='_blank'>
          <img src={logo} className=' absolute w-1/6 h-1/4 max-sm:scale-65 max-md:scale-75 max-xs:scale-55 top-1 right-1' ></img>
        </a>
        <p className='loginText'>Email</p>

        <input className={!eError ? "loginInput" : "loginInputError"} ref={emailInput} type="email" placeholder='Email' id='email' 
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
            captureInput(event,passwordInput,false)
        }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            captureInputChange(event, 'email')
        }>
        </input>
        <p className='loginText'>Password</p> 

        <input className={!pError ? "loginInput" : "loginInputError"} ref={passwordInput} placeholder='Password' type='password' 
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
          captureInput(event,passwordInput,true)
        } 
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          captureInputChange(event, 'password')
        }> 
        </input>
        
        <button className='loginButton' onClick={submit} data-tooltip-target="tooltip-click" data-tooltip-trigger="click">Sign In</button>
        <div className="flex flex-center m-10">
          {errorMessage}
          <a className='loginOtherOptions  xl:pr-32 lg:pr-24 md:pr-18 sm:pr-8 xs:pr-5 2xs:pr-3 ' href=''>Don't have an account?</a>
          <a className='loginOtherOptions 2xs:pl-[2px] ' href='https://www.youtube.com/watch?v=CQytFzhOxR8' target='_blank'>Forgot password?</a>
        </div>

      </div>
    </div>
    
  )
}

export default LoginPage  
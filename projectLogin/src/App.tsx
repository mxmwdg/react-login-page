import './App.css'
import LoginPage from './pages/LoginPage'
import image from './pages/images.png'
import image2 from './pages/images2.png'


function App() {
 

  return (
    <div className='relative grow'>
      <img src={image} className=' absolute h-1/2 w-1/4 left-30 bottom-0 '></img>
      <img src={image2} className=' absolute h-1/2 w-1/4 right-30 top-0 '></img>
      <LoginPage></LoginPage>
    </div>
  )
}

export default App

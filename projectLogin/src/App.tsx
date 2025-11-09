import './App.css'
import LoginPage from './pages/LoginPage'
import image from './pages/images.png'
import image2 from './pages/images2.png'


function App() {
 

  return (
    <div className='relative grow'>
      <img src={image} className='backgroundImage left-30 bottom-0'></img>
      <img src={image2} className='backgroundImage right-30 top-0'></img>
      <LoginPage></LoginPage>
    </div>
  )
}

export default App

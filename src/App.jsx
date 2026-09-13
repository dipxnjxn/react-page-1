import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Social from './components/social/Social'
import Vercard from './components/vercard/Vercard'
import facebook from './assets/icon/facebook.png'
import instagram from './assets/icon/instagram.png'
import linkedin from './assets/icon/linkedin.png'
import github from './assets/icon/github.png'


function App() {
  return (
    <>
      <div className='mainbg min-h-screen h-auto w-full flex flex-col items-center text-center justify-center overflow-hidden'>
        <div className='backdrop-blur-lg flex flex-col h-auto w-96 m-10 border-2 rounded border-pink-700 max-sm:w-auto max-sm:m-2'>
          <Header />
          <div className='flex justify-around  mb-4 mx-10 max-sm:mx-3'>
            <Social link={facebook} tittle="https://www.facebook.com/profile.php?id=100014218954756" />
            <Social link={instagram} tittle="https://www.instagram.com/dipxnjxn/" />
            <Social link={linkedin} tittle="https://www.linkedin.com/in/dipanjan-saha-24884b221/" />
            <Social link={github} tittle="https://github.com/dipxnjxn" />
          </div>
          <div className='max-sm:text-sm'>
            <Vercard tittle="Check-out my blog" link="/lost" />
            <Vercard tittle="Buy me a coffee" link="/lost" />
            <Vercard tittle="Available projects (githubs only) " link="https://github.com/dipxnjxn" />
            <Vercard tittle="Get yourself the best gift" link="/lost" />
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App

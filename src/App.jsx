import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Social from './components/social/Social'
import Vercard from './components/vercard/Vercard'

function App() {
  return (
    <>
      <div className='mainbg min-h-screen h-auto w-full flex flex-col items-center text-center justify-center'>
        <div className='backdrop-blur-lg flex flex-col h-auto w-96 m-10 border-2 rounded border-pink-700 max-sm:w-auto '>
          <Header />
          <div className='flex justify-around  mb-4 mx-10 max-sm:mx-3'>
            <Social link="src\assets\icon\facebook.png" tittle="https://www.facebook.com/profile.php?id=100014218954756" />
            <Social link="src\assets\icon\instagram.png" tittle="https://www.instagram.com/dipxnjxn_/" />
            <Social link="src\assets\icon\linkedin.png" tittle="https://www.linkedin.com/in/dipanjan-saha-24884b221/" />
            <Social link="src\assets\icon\github.png" tittle="https://github.com/dipxnjxn" />
          </div>
          <div className='max-sm:text-sm'>
            <Vercard tittle="Check-out my blog" link="/lost" />
            <Vercard tittle="Buy me a coffee" link="/lost" />
            <Vercard tittle="My youtube (anime content)" link="https://www.youtube.com/@Animoxx07/featured" />
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
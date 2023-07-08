import './App.css'
import RegisterContainer from './components/register/RegisterContainer'

function App() {

  return (
    <>
    <div className="flex flex-col items-center justify-center">
    <h1 className="flex text-6xl font-bold">
      Let's get started!
    </h1> 
    </div>
    <div className='flex flex-col'>
      <RegisterContainer />
    </div>
     
    </>
  )
}

export default App

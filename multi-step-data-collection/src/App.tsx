import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RolesSelectionPage from './components/register/RolesSelectionPage'
import './App.css'
import { Container } from '@mui/material'
import MarketingDataSurveyPage from './components/register/MarketingDataSurveyPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <h1 className="text-6xl font-bold">
          Let's get started!
        </h1>
        <MarketingDataSurveyPage />
      </div>
      <Container className="flex flex-col items-center justify-center min-h-screen ">

      </Container>
      
     
    </>
  )
}

export default App

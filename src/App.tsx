import { HashRouter, Routes, Route } from 'react-router-dom'
import LogInForm from "./LogInForm.tsx"
import HomePage from './Dashboard/Home.tsx'
function App() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={
                <div className="flex justify-center items-center bg-[#007EA7] w-[85vw] h-[100vh]">
                  <LogInForm/>
                </div>
          } />
          <Route path="/home" element={
                <div className="flex justify-center items-center bg-[#007EA7] w-[85vw] h-[100vh]">
                  <HomePage/>
                </div>
          } />
        </Routes>
      </HashRouter>

    </div>    
  )
}

export default App

import LogInForm from "./LogInForm.tsx"
import UserAuthentication from "./UserAuthentication.tsx"

function App() {

  return (
    <div className="flex justify-center items-center bg-[#007EA7] w-[85vw] h-[100vh]">
      <LogInForm/>
      <UserAuthentication />
    </div>
  )
}

export default App

import './css/LogInForm.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import UserAuthentication from './UserAuthentication'

function LogInForm(){

    // Input State
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [authResult, setAuthResult] = useState<boolean>(true)
    const navigate = useNavigate(); // ✅ Correct hook


    const handleSumbit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const result = await UserAuthentication(email, password)

        if(result.success){
            if(result.count != 1){
                setAuthResult(false)
            }else{
                navigate("/home")
            }
        }
    }

    return(
        <div className="w-fit h-fit bg-white py-7 px-5 rounded-md">
            <form className="log-in-form-container" onSubmit={handleSumbit}>
                <input 
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className={`${authResult ? '' : 'border-red-400'}`}
                />
                <p className={`${authResult ? 'hidden' : ''} text-red-400`}>Entered an invalid username</p>

                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className={`${authResult ? '' : 'border-red-400'}`}
                />
                <p className={`${authResult ? 'hidden' : ''} text-red-400`}>Entered an invalid password</p>

                <button type="submit">
                    <p>
                        Log In
                    </p>
                </button>
            </form>
        </div>
    )
}

export default LogInForm
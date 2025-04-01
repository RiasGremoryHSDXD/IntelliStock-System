import './css/LogInForm.css'
import { useState } from "react"


function LogInForm(){

    // Input State
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div className="w-fit h-fit bg-white py-7 px-5 rounded-md">
            <form className="log-in-form-container">
                <input 
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <p className='hidden'>Entered an invalid username</p>

                <input 
                    type="text" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <p className='hidden'>Entered an invalid password</p>

                <button>
                    <p>
                        Log In
                    </p>
                </button>
            </form>
        </div>
    )
}

export default LogInForm
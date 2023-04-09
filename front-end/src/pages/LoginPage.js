import {useState} from 'react'
import {useHistory} from 'react-router-dom'



export const LogInPage = () => {

    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const history = useHistory()

    const onLogInClicked = async () => {
        alert('Log in not yet implemented')
    }
    return (
        <div className="content-container">
            <h1>Log In</h1>
            <input 
            value={emailValue}
            onChange={e => setEmailValue(e.target.value)}
            placeholder="someone@gmail.com" >
            </input>
            <input 
            value={passwordValue}
            onChange={e=> setPasswordValue(e.target.value)}
            type="password"
            placeholder="password"
            >
            </input>
            <button onClick={onLogInClicked}>
                Log In
            </button>
            <button>
                Forgot Password?
            </button>
            <button>
                Don't have an account? Sign Up
            </button>

        </div>
    )
}
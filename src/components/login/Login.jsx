import { Button } from '@mui/material'
import styled from 'styled-components'
import GoogleIcon from '@mui/icons-material/Google'
import { auth, provider } from '../../firebase'
import { signInWithPopup } from 'firebase/auth'

const Login = () => {
    const signIn = async () => {
        try {
            await signInWithPopup(auth, provider)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <LoginContainer>
            <div>
                <img src="https://assets.brandfolder.com/pl546j-7le8zk-afym5u/v/3033396/original/Slack_Mark_Web.png" alt="Slack" />
                <h1>Slack Clone</h1>
                <Button onClick={signIn}>
                    <GoogleIcon />
                    &nbsp;
                    Sign In
                </Button>
            </div>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
    background: #f8f8f8;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 100px;
        border-radius: 10px;
        background: white;
        box-shadow: 0px 3px 7px rgb(0 0 0 / 10%);

        img {
            height: 120px;
        }

        h1 {
            color: #294370;
        }

        button {
            margin-top: 30px;
            background-color: #4285f4;
            color: white;

            :hover {
                background-color: #3879e2;
            }
        }
    }
`

export default Login
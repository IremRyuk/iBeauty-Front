import React from 'react'

export default function Login() {
    const googleAuth = () => {
        window.open(
            `/api/${process.env.REACT_URL}/auth/google/callback`,
            "_self"
        )
    }
  return (
    <div>
        <button onClick={()=>googleAuth()}>LogIn</button>
        <button>SignUp</button>
    </div>
  )
}

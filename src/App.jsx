import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://mcmkzamzskbfslqcnbzx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbWt6YW16c2tiZnNscWNuYnp4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDg0MjU2NiwiZXhwIjoyMDA2NDE4NTY2fQ.FpIZRH4bPg6tWwkpt-wKEZxgywvFM3mBmsDLgMfBGcQ')





function App() {
  const [email, setEmail] = useState("")

  const registrarCorreo =async()=>{
    try {
      const { data, error } = await supabase.auth.signUp({
        email: 'example1@email.com',
        password: 'example-password1',
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    console.log("correo")
  }
  return (
    <>
      {email?
        email:
        "email"
      }
      <input value={email} name="email" onChange={e=>setEmail(e.target.value)} type="text" />
      <button onClick={()=>registrarCorreo()}>enviar</button>
    </>
  )
}

export default App

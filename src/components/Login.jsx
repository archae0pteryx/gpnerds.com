import React from 'react'

export default function Home() {
  const handleSubmit = () => {
    alert('email / password incorrect')
  }
  return (
    <div className="form">
      <h2>Login</h2>
      <input className='input' placeholder='email'></input>
      <input className='input' placeholder='password'></input>
      <button className='button' onClick={handleSubmit}>submit</button>
    </div>
  )
}

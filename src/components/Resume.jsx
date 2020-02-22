import React from 'react'
import resumePdf from '../assets/resume-02-2020.pdf'
export default function Home() {
  return (
    <div className="container">
      <h2>Resume</h2>
      <a href={resumePdf}>pdf</a>
    </div>
  )
}

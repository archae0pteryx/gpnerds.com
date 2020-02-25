import React from 'react'
import { Link } from '@reach/router'
import ProjectCard from './ProjectCard'
import RR from '../assets/rogue.png'
import Rubix from '../assets/rubix.png'
import Dutch from '../assets/dutchbros.png'

import '../assets/projects.scss'

const PROJECTS = [
  {
    name: 'Dutch Bros',
    desc: 'Dutch Bros Website',
    imageUrl: Dutch,
    extLink: 'https://dutchbros.com',
    ghUrl: false
  },
  {
    name: 'Rubix',
    desc: 'Decentralized Crypto Exchange',
    imageUrl: Rubix,
    extLink: 'https://rubix.io',
    ghUrl: false
  },
  {
    name: 'Rogue Roasters',
    desc: 'Award winning coffee',
    imageUrl: RR,
    extLink: 'https://rogueroasters.com',
    ghUrl: false
  },
  {
    name: 'More Soon',
    desc: 'More to add!',
    imageUrl: 'https://www.fillmurray.com/400/400',
    extLink: false,
    ghUrl: 'https://github.com/archae0pteryx'
  },
]

export default function Projects() {
  return (
    <>
      <Link className='back-btn' to="/">Back</Link>
      <div className="projects-container">
        {PROJECTS.map((item, i) => (
          <ProjectCard key={i} {...item} />
        ))}
      </div>
    </>
  )
}

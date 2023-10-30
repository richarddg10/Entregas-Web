import React from 'react'
import '../Projects/Projects.css'

export function Projects ({ imgRut, projectRut, caption }) {

  return (
    <>
      <a className='a-caption' href={projectRut} target='_blank' rel='noreferrer'>
        <img className='projectsStyle' src={imgRut} />
        <figcaption>{caption}</figcaption>
      </a>
    </>
  )
}

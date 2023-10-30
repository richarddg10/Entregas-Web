import React from 'react'
// import { Projects } from '../../components'
// import HospitalPadrinoProject from '../../assets/HospitalPadrinoProject.png'
// import SpotifyProject from '../../assets/SpotifyProject.png'
// import DiscoverMeProject from '../../assets/DiscoverMeProject.png'

import './MyProjectsMain.css'

export function MyProjectsMain (props) {
  return (
    <>
      <div className='' ref={props.reference}>
        {/* <h1 className='projectsTittle'>My projects</h1> */}
        <div className='navBar'>
          <div className='circleInLine' />
          <div className='verticalLine' />
        </div>
        <div className='projectsContainer'>

          {/* <Projects borderColor='4px solid #FEB300' imgRut={HospitalPadrinoProject} projectRut='https://www.behance.net/gallery/145695963/Hospital-Padrino-UIUX-Project' />
          <Projects borderColor='4px solid #6400FF' imgRut={SpotifyProject} projectRut='https://www.behance.net/gallery/163450445/Spotify-OOH-Experience' />
          <Projects borderColor='4px solid #FEB300' imgRut={DiscoverMeProject} projectRut='https://www.behance.net/gallery/138562343/App-DiscoverMe' /> */}
        </div>
      </div>
    </>
  )
}

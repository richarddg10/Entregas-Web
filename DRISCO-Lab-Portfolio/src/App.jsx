import React, { useRef } from 'react'

import { Body, Footer } from './components'
import { AppRouters } from './AppRouters'

export function App () {
  const contact = useRef(null)

  const scrollToSection = (data) => {
    if (data === 'contact') {
      console.log('holi')
      contact.current.scrollIntoView()
    }
  }

  return (
    <>
      <AppRouters />
      {/* <Login /> */}
      {/* <Body onSendMessage={scrollToSection} />
      <Footer reference={contact} /> */}
      {/* <AllProjectsScreen /> */}
      {/* <AddProjectScreen /> */}
    </>
  )
}

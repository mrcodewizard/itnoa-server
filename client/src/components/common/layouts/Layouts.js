import React from 'react'
import MainMenu from '../main-menu/MainMenu'
import TopMenu from '../top-menu/TopMenu'
import Footer from '../footer/Footer'

function Layouts(props) {
  return (
    <div>
       <TopMenu />
       <MainMenu />
           { props.children }
       <Footer />
    </div>
  )
}

export default Layouts
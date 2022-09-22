import React from 'react'
import Brief from '../Brief/Brief'
import HeaderLanding from '../HeaderLanding/HeaderLanding'
import Naavbar from '../Naavbar/Naavbar'
import SocialNav from '../SocialNav/SocialNav'
import CanavesNavBar from '../CanavesNavBar/CanavesNavBar'
import Services from '../Services/Services'
import Projects from '../Projects/Projects'
const Home = () => {
  return (
    <>
    <SocialNav/>
    {/* <Naavbar/> */}
    <CanavesNavBar/>
    <HeaderLanding/>
    <Brief/>
    <Services/>
    <Projects/>
    </>
  )
}

export default Home
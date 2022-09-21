import React from 'react'
import Brief from '../Brief/Brief'
import HeaderLanding from '../HeaderLanding/HeaderLanding'
import Naavbar from '../Naavbar/Naavbar'
import SocialNav from '../SocialNav/SocialNav'

const Home = () => {
  return (
    <>
    <SocialNav/>
    <Naavbar/>
    <HeaderLanding/>
    <Brief/>
    </>
  )
}

export default Home
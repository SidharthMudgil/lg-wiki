import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function NavigatorH() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
</>

  )
}


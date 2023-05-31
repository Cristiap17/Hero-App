import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'


export default function HomeScreen() {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

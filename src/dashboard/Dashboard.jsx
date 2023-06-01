import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LogIn from '../components/LogIn/LogIn'
import HomeScreen from '../pages/HomeScreen'
import MarvelScreen from '../components/MarvelScreen/MarvelScreen'
import SearchScreen from '../components/SearchScreen/SearchScreen'
import DcScreen from '../components/DcScreen/DcScreen'
import HeroScreen from '../pages/HeroScreen'

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<LogIn />} />
            <Route path='/' element={<HomeScreen />} >
                <Route index element={<MarvelScreen />} />
                <Route path='marvel' element={<MarvelScreen />} />
                <Route path='dc' element={<DcScreen />} />
                <Route path='search' element={<SearchScreen />} />
                <Route path='hero/:idHero' element={<HeroScreen />} />
            </Route>
                <Route path='*' element={<Navigate replace to='/login' />} />
        </Routes>
    )
}

export default DashboardRoutes
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Portfolio2 from '../../screens/Portfolio2'

const AppRouter = () => {
    return (

        <Router>
            <Routes>
                <Route path='/' element={<Portfolio2 />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
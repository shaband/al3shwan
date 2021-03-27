import React, { useState } from 'react'
// import './App.css'
import HomePage from './pages/Home'
import AppNavBar from './components/navbar'


function App() {

return (
<div dir="rtl" className="font-Cairo bg-primary container">
  <AppNavBar />
  <HomePage />
</div>
)
}

export default App
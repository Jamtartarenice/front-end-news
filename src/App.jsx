import { useState,useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/api/article/' element={<ArticlePage />} />

    </Routes>
  )
}

export default App

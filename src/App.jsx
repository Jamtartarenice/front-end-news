import { useState,useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ArticlePage from './components/ArticlePage';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/article/:article_id' element={<ArticlePage />} />
    </Routes>
  )
}
export default App
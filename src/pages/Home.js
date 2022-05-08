import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { useDocumentTitle } from './useDocumentTitle'

function Home() {
    useDocumentTitle("home")
  return (
    <div>
        <Header/>
        <Hero/>
    </div>
  )
}

export default Home
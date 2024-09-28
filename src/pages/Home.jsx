import React from 'react'
import { ImageCarousel , VisinorySection } from '../components/Home'
import SectionTitle from '../components/Section/SectionTitle'

const Home = () => {
  return (
    <div className='w-full h-full'>
        <ImageCarousel />
        <SectionTitle />
        <VisinorySection/>
    </div>
  )
}

export default Home
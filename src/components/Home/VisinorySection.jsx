import React from 'react'
import VisionaryCard from './VisionaryCard'

const visionaryDataList = [
    {
        title: 'Nitin Gadkari A Visionary',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        image: 'https://nitingadkari.org.in/wp-content/uploads/elementor/thumbs/Nitin-gadkari-1-qb1qlamuruodkez57uohkq97dn2q27t3svuoxretao.webp',
        readMoreLink : 'https://nitingadkari.org.in/'
    },
    {
        title: 'Nitin Gadkari A Visionary',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        image: 'https://nitingadkari.org.in/wp-content/uploads/elementor/thumbs/Nitin-gadkari-1-qb1qlamuruodkez57uohkq97dn2q27t3svuoxretao.webp',
        readMoreLink : 'https://nitingadkari.org.in/'
    },
    {
        title: 'Nitin Gadkari A Visionary',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        image: 'https://nitingadkari.org.in/wp-content/uploads/elementor/thumbs/Nitin-gadkari-1-qb1qlamuruodkez57uohkq97dn2q27t3svuoxretao.webp',
        readMoreLink : 'https://nitingadkari.org.in/'
    },
    {
        title: 'Nitin Gadkari A Visionary',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        image: 'https://nitingadkari.org.in/wp-content/uploads/elementor/thumbs/Nitin-gadkari-1-qb1qlamuruodkez57uohkq97dn2q27t3svuoxretao.webp',
        readMoreLink : 'https://nitingadkari.org.in/'
    },
];

const VisinorySection = () => {
  return (
    <div className='p-4 flex gap-8 sx:justify-center md:justify-between flex-wrap'>
        {
            visionaryDataList.map( (visionaryData, index) => {
                return (
                    <VisionaryCard key={index} cardData={visionaryData}/>
                )
            })
        }
    </div>
  )
}

export default VisinorySection
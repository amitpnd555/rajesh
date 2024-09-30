import React from 'react'
import VisionaryCard from './VisionaryCard'
import image7 from "../../../public/images/image7.jpg"

const visionaryDataList = [
    {
        title: "RAJESH'S Biography",
        description: 'Introduction about rajesh shukla',
        image: '../../../public/images/image7.jpg',
        readMoreLink : '#'
    },
    {
        title: 'Political Belief',
        description: 'Political belief of Rajesh Shukla',
        image: '../../../public/images/image7.jpg',
        readMoreLink : '#'
    },
    {
        title: 'Karyakarta',
        description: 'Rajesh Shukla as an Karyakarta',
        image: '../../../public/images/image7.jpg',
        readMoreLink : '#'
    },
    {
        title: 'Public Service As a MLA',
        description: 'Public Services done as a MLA',
        image: '../../../public/images/image7.jpg',
        readMoreLink : '#'
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

import React from 'react'
import DetailsNavBar from './DetailsNavBar'
import DetailsHero from './DetailsHero'
import DetailsGallery from './DetailsGallery'
import Media from './Media'
import Team from './Team'
import Reviews from './Reviews'



const Details = () => {
  return (
    <div className='  flex flex-wrap w-[75%] gap-5 right-0 mr-0 ml-2'>
        <DetailsNavBar manufacturer={''} setManuFacturer={function (manufacturer: string): void {
              throw new Error('Function not implemented.')
          } }/>
          <DetailsHero/>
          <DetailsGallery/>
          <Media/>
          <Team/>
          <Reviews/>
    </div>
  )
}

export default Details
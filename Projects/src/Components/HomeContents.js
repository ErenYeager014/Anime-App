import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import ScrollingContent from './ScrollingContent'
function HomeContents() {
  return (
    <>
    <div className='scrollElement'>
    <div className='recommended'>
        <h3>Recommended</h3>
        <div className='gap'>
        </div>
        <div className='arrow'>
            <AiOutlineArrowRight />
        </div>

    </div>
    <ScrollingContent />
    </div>
    <div className='scrollElement'>
    <div className='recommended'>
        <h3>Manga</h3>
        <div className='gap'>
        </div>
        <div className='arrow'>
            <AiOutlineArrowRight />
        </div>

    </div>
    <ScrollingContent />
    </div>
    <div className='scrollElement'>
    <div className='recommended'>
        <h3>Top Anime</h3>
        <div className='gap'>
        </div>
        <div className='arrow'>
            <AiOutlineArrowRight />
        </div>

    </div>
    <ScrollingContent />
    </div>
    </>
  )
}

export default HomeContents
import React from 'react'
import './HeadingOfSection.css'
const HeadingOfSection = (props) => {
  return (
    <>
        <p className="gtext">{props.htext}</p>
        <p className="mtext accent-clr">{props.mtext}</p>
    </>
  )
}

export default HeadingOfSection
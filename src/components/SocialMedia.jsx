import React from 'react'

import {GoMarkGithub} from 'react-icons/go';
import {BsLinkedin} from 'react-icons/bs';


const SocialMedia = () => {
  return (
    <div className ="app_social">
      <div >
      <a style={{display: "table-cell"}} href="https://github.com/BACoffman" target="_blank" rel="noreferrer">
          <GoMarkGithub/>
        </a>
      </div>
      <div>
      <a style={{display: "table-cell"}} href="https://www.linkedin.com/in/benjamin-coffman/" target="_blank" rel="noreferrer">
        <BsLinkedin/>
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
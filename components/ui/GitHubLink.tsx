// GitHubLink.jsx
'use client'

import React from 'react'

const GitHubLink = ({ git }) => {
  return (
    <a 
      href={git}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
    > 
      <img 
        src="git.svg" 
        alt="github"
        className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:scale-110 hover:bg-[#FF007A]' 
      />
    </a>
  )
}

export default GitHubLink

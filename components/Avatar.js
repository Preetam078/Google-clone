import React from 'react'

function Avatar({url, className}) {
    return (
        <img className={`h-10 rounded-full transition duration-150 transform hover:scale-110 shadow-2xl cursor-pointer ${className}`}
         loading="lazy"
         src={url}
         alt="profile"
        />
        
    )
}

export default Avatar

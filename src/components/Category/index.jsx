import React from 'react'
import { Link, Image } from './styles'

const default_image = 'https://i.imgur.com/dJa0Hpl.jpeg'

 const Category =  ({cover = default_image, path= '#', emoji = '?'}) => (
    <Link to={path}>
        <Image src={cover}/>
        {emoji}
    </Link>
)

export {Category}
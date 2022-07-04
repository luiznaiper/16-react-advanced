import React from 'react'
import { Anchor, Image } from './styles'

const default_image = 'https://i.imgur.com/dJa0Hpl.jpeg'

 const Category =  ({cover = default_image, path, emoji = '?'}) => (
    <Anchor href={path}>
        <Image src={cover}/>
        {emoji}
    </Anchor>
)

export {Category}
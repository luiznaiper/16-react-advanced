import React from 'react'
import { ImgWrapper, Img, Button } from './styles'
import {MdFavoriteBorder, mdFavoriteBorder} from 'react-icons/md'

const default_img = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

const PhotoCard = ({id, likes=0, src = default_img}) => {
  return (
    <article>
        <a href={`/detail/${id}`} >
            <ImgWrapper>
                <Img src={src}/>
            </ImgWrapper>
        </a>
        <Button>
            <MdFavoriteBorder size='32px'/> {likes} likes!
        </Button>
    </article>
  )
}

export {PhotoCard}
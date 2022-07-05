import React, {useEffect, useRef, useState} from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import {MdFavoriteBorder} from 'react-icons/md'

const default_img = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

const PhotoCard = ({id, likes=0, src = default_img}) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries){
      const {isIntersecting} = entries[0]
      console.log(isIntersecting)
      if (isIntersecting){
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(ref.current)
  }, [ref])
  
  return (
    <Article ref={ref}>
      {
        show && <>
           <a href={`/detail/${id}`} >
            <ImgWrapper>
                <Img src={src}/>
            </ImgWrapper>
           </a>
          <Button>
              <MdFavoriteBorder size='32px'/> {likes} likes!
          </Button>
        </>
      }
       
    </Article>
  )
}

export {PhotoCard}
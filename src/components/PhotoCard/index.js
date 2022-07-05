import React, {useEffect, useRef, useState} from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'

const default_img = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

const PhotoCard = ({id, likes=0, src = default_img}) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  const key = `like-${id}`
  const [liked, setLiked] = useState(() => {
    try{
      const like = window.localStorage.getItem(key)
      return like
    } catch (error){
      return false
    }
  })
  console.log(liked)
  useEffect(() => {
    (async () => {
      typeof window.IntersectionObserver !== 'undefined' ?
        window.IntersectionObserver :
        await import('intersection-observer');

      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          console.log('Sí');
          observer.disconnect();
        }
      });
      observer.observe(ref.current);
    })();
  }, [ref]);
  
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (error){
      console.log(error)
    }
  }

  return (
    <Article ref={ref}>
      {
        show && <>
           <a href={`/detail/${id}`} >
            <ImgWrapper>
                <Img src={src}/>
            </ImgWrapper>
           </a>
          <Button onClick={() => setLocalStorage(!liked)}>
              <Icon size='32px'/> {likes} likes!
          </Button>
        </>
      }
       
    </Article>
  )
}

export {PhotoCard}
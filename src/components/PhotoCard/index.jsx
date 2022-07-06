import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import {useNearScreen} from '../../hooks/useNearScreen'
const default_img = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'

const PhotoCard = ({id, likes=0, src = default_img}) => {
  const [liked, setLiked] = useLocalStorage(key, false)
  const key = `like-${id}`
  const [show, ref] = useNearScreen()


  return (
    <Article ref={ref}>
      {
        show && <>
           <a href={`/?detail=${id}`} >
            <ImgWrapper>
                <Img src={src}/>
            </ImgWrapper>
           </a>
           <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    !liked && toggleLike({variables: {
                      input: {id}
                    }})
                    setLiked(!liked)
                  } 
                  return  <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
                }
              }
           </ToggleLikeMutation>
        </>
      }
       
    </Article>
  )
}

export {PhotoCard}
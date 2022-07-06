import React from 'react'
import { ImgLoading, ButtonLoading } from '../LoadingPhotoCardWithQuery/styles'
import { ImgWrapper, Article } from '../PhotoCard/styles'

const LoadingPhotoCardWithQuery = () => {
  return (
    <Article>
        <>
            <ImgWrapper> 
                <ImgLoading />
            </ImgWrapper>
            <ButtonLoading />
        </>    
     </Article>
  )
}

export  {LoadingPhotoCardWithQuery}
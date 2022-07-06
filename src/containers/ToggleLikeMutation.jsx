import React from 'react'
import { Mutation } from '@apollo/client/react/components'
import { MUTATION_LIKE_PHOTO } from '../hoc/MUTATION_LIKE_PHOTO'

const ToggleLikeMutation = ({children}) => {
    return <Mutation mutation={MUTATION_LIKE_PHOTO}>
        {children}
    </Mutation>
}

export {ToggleLikeMutation}
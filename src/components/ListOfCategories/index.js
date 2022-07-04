import React from 'react'
import { Category } from '../Categoy'
import {List, Item} from './styles'

const ListOfCategories = () => {
    return (
        <List>
            {
                [1,2].map(category => <Item key={category}><Category/></Item>)
            }
        </List>
    )
}

export {ListOfCategories}
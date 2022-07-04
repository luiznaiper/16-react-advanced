import React from 'react'
import { Category } from '../Categoy'
import {List, Item} from './styles'
import data from '../../../api/db.json'

const ListOfCategories = () => {
    return (
        <List>
            {
                data.categories.map(category => <Item key={category.id}><Category {...category}/></Item>)
            }
        </List>
    )
}

export {ListOfCategories}
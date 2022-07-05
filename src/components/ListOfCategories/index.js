import React, {useState, useEffect} from 'react'
import { Category } from '../Category'
import {List, Item} from './styles'
import axios from 'axios'



const ListOfCategories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
          const { data } = await axios.get(
            "https://16-react-advanced-luiznaiper.vercel.app/categories"
          );
          setCategories(data);
        };
    
        fetchCategories();
      }, []);
    return (
        <List>
            {
                categories.map(category => <Item key={category.id}><Category {...category}/></Item>)
            }
        </List>
    )
}

export {ListOfCategories}
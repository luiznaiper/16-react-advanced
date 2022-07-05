import React, {useState, useEffect} from 'react'
import { Category } from '../Category'
import {List, Item} from './styles'
import axios from 'axios'



const ListOfCategories = () => {
    const [categories, setCategories] = useState([])
    const [showFixed, setShowFixed] = useState(false)
    useEffect(() => {
        const fetchCategories = async () => {
          const { data } = await axios.get(
            "https://16-react-advanced-luiznaiper.vercel.app/categories"
          );
          setCategories(data);
        };
    
        fetchCategories();
      }, []);

      useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
      document.addEventListener('scroll', onScroll)
        
        return () => document.removeEventListener('scroll', onScroll)

      }, [showFixed])
      

      const renderList = (fixed) => (
        <List className={fixed ? 'fixed' : ''}>
            {
                categories.map(category => <Item key={category.id}><Category {...category}/></Item>)
            }
        </List>
      )  
    return (
        <>
        {renderList()}
        {showFixed && renderList(true)}
        </>
        
    )
}

export {ListOfCategories}
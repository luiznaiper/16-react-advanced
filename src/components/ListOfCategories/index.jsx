import React, {useState, useEffect} from 'react'
import { Category } from '../Category'
import {List, Item} from './styles'
import axios from 'axios'

function useCategoriesData() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchCategories = async () => {

          setLoading(true)  
          const { data } = await axios.get(
            "https://16-react-advanced-luiznaiper.vercel.app/categories"
          );
          setCategories(data);
          setLoading(false)
        };
    
        fetchCategories();
      }, []);

      return {categories, loading}

}

const ListOfCategories = () => {
    const {categories, loading} = useCategoriesData()
    const [showFixed, setShowFixed] = useState(false)
    
      useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
      document.addEventListener('scroll', onScroll)
        
        return () => document.removeEventListener('scroll', onScroll)

      }, [showFixed])
      

      const renderList = (fixed) => (
        <List fixed={fixed}>
            {
                loading
                ?
                <Item key='loading'><Category/></Item>
                :
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
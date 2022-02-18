import React, { useState, useEffect } from "react"
import { useParams } from "react-router";
import useApplicationData from '../hooks/useApplicationData';
import CategoryCard from "./CategoryCard";
// import './FavouritesCard.css';

export default function Category() {
  const params = useParams();
  console.log('PARAMSIN CATEGORY', params);

  const { getCategory } = useApplicationData();
  const [categories, setCategory] = useState([]);
  useEffect(() => {

    getCategory(params.category)
      .then((data) => {
        setCategory(data);
      })
  }, [])

  const categoryList = categories.map((category, i) => {
    return (
      <CategoryCard
        key={i}
        city={category.city}
        photo={category.thumbnail_photo_url}
        title={category.title}
        id={category.id}
        price={category.curr_price}
      />
    )
  })


  return (
    <section>
      {categoryList}
    </section>
  )
}



import React from 'react'
import { useParams } from 'react-router-dom'

const NewsCategory = () => {
    const { category } = useParams();
    return (
        <div>News of {category}</div>
    )
}

export default NewsCategory
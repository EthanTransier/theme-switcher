import React from 'react'
import {data} from '../data'

const Card = ({item}) => {
  return (
    <div className='card'>
        <img src={item.image} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
    </div>
  )
}

const CardList = () => {
    return(
        <article>{
            data.map((item) =>{
                <Card item={item}/>
            })
        }</article>
    )
}

export default CardList
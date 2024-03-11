import React from 'react'
import {data} from '../data'

const Card = ({item}) => {
    console.log('item')
    return (
        <div className='card'>
            <img src={ require(`../images/${item.image}`)} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
        </div>
    )
}

const CardList = () => {
    return(
        <section className='cardList'>
            {data.map((card, index) =>{
                return <Card key={index} item={card}/>
            })} 
        </section>
    )
}

export default CardList
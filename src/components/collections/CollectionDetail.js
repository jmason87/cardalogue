import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { getSingleCollection } from "./CollectionManager"


export const CollectionDetail = () => {
    const [collection, setCollection] = useState({})
    const { collectionId } = useParams()
    const parsedId = parseInt(collectionId)
    useEffect(() => {
        getSingleCollection(parsedId).then(setCollection)
    }, [])
    
    console.log(parsedId)
    return <>
        <h1>Collection Detail</h1>
        <div>
            <button>Add Cards</button>
        </div>
        <div>
            {
                collection.card?.map((card) => {
                    return <>
                    <img key={`card--${card.id}`}src={card.image} />
                    <p>{card.first_name} {card.last_name}</p>
                    <p>Card #{card.card_number}</p>
                    <p>Category: {card.card_category.label}</p>
                    <p>Set: {card.set?.name}</p>
                    <ul>Attributes: 
                    {
                        card.tag.map((cardtags) => {
                            return <li key={`cardtags--${cardtags.id}`}>{cardtags.label}</li>
                        })
                    }
                    </ul>
                    </>
                })
            }
        </div>
        <div>
            <button>ViewCommetns</button>
        </div>
    </>
}
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { getSingleCollection } from "./CollectionManager"


export const CollectionDetail = () => {
    const [collection, setCollection] = useState({})
    const { collectionId } = useParams()
    const parsedId = parseInt(collectionId)
    const history = useHistory()
    
    useEffect(() => {
        getSingleCollection(parsedId).then(setCollection)
    }, [])
    
    return <>
        <h1>Collection Detail</h1>
        <div>
            <button onClick={() => {history.push('/sets')}}>Add Cards</button>
        </div>
        <div>
            {   // mapping over the card array in the collection object
                collection.card?.map((card) => {
                    return <>
                    <img src={`http://localhost:8000${card.image}`} className="image is-128x128 mr-3"></img>                    <p>{card.first_name} {card.last_name}</p>
                    <p>Card #{card.card_number}</p>
                    <p>Category: {card.card_category.label}</p>
                    <p>Set: {card.set?.name}</p>
                    <ul>Attributes: 
                    { // mapping over the tags array in each card object
                        card.tag.map((cardtags) => {
                            return <li key={`cardtags--${cardtags.id}`}>{cardtags.label}</li>
                        })
                    }
                    </ul>
                    <div>
                    <button>Remove Card</button>
                    </div>
                    </>
                })
            }
        </div>
        <div>
            <button onClick={() => {history.push(`/comments/${parsedId}`)}}>ViewCommetns</button>
        </div>
    </>
}
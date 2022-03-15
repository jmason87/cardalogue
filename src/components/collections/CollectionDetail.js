import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { deleteCardCollection, getCardCollections } from "../cardcollection/CardCollectionManager"
import { getSingleCollection } from "./CollectionManager"


export const CollectionDetail = () => {
    const [collection, setCollection] = useState({})
    const [cardsInCollection, setCardsInCollection] = useState([])
    const { collectionId } = useParams()
    const parsedId = parseInt(collectionId)
    const history = useHistory()
    
    // this useEffect is watch for state change in the cardsInCollection array, every time that state changes, this useEffect will run
    useEffect(() => {
        getSingleCollection(parsedId).then(setCollection)
    }, [cardsInCollection])

    useEffect(() => {
        getCardCollections().then(setCardsInCollection)
    }, [])

    // this function is looking to see if the card and collection in any cardcollection object exactly matches the card and collection
    // that we are looking at in the dom. We get the cardId parameter from the collection.card map below. If there is a match, the 
    // card collection object is deleted from the database and the cardsInCollection state is updated.
    const foundCardToRemove = (cardId) => {
        cardsInCollection.map((c) => {
            if (c.card === cardId && c.collection === collection.id) {
                return deleteCardCollection(c.id).then(setCardsInCollection)
            }
        })

    }

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
                    <button 
                    value={card.id}
                    //we invoke the function onClick and pass in the card.id as the argument for cardId parameter we set above  
                    onClick={() => {foundCardToRemove(card.id)}}>Remove Card</button>
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
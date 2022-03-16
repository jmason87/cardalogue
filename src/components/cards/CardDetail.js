import React, { useEffect, useState } from "react"
import { useHistory, Link, useParams } from "react-router-dom"
import { getCollections, getSingleCollection } from "../collections/CollectionManager"
import { getSingleCard } from "./CardManager"
import { createCardCollection, getCardCollections } from "../cardcollection/CardCollectionManager"
import { getCurrentUser } from "../users/UserManager"



export const CardDetail = () => {
    const [card, setCard] = useState({})
    const [collections, setCollections] = useState([])
    const [collectionId, setCollectionId] = useState(0)
    const [collection, setCollection] = useState({})
    const [cardCollections, setCardCollections] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    const { cardId } = useParams()
    const parsedId = parseInt(cardId)
    const history = useHistory()

    // gets a single card based on the id in the URL
    useEffect(() => {
        getSingleCard(parsedId).then(setCard)
    }, [])

    // gets the collections array
    useEffect(() => {
        getCollections().then(setCollections)
    }, [])

    // gets the collection object selected from below
    useEffect(() => {
        getSingleCollection(collectionId).then(setCollection)
    }, [collectionId])

    // gets everything in the cardcollections table
    useEffect(() => {
        getCardCollections().then(setCardCollections)
    }, [])

    useEffect(() => {
        getCurrentUser().then(setCurrentUser)
    }, [])

    // checks to see if the card selected is already in the card array of that collection
    const found = 
        collection.card?.find(c => c.id === parsedId)
    
    
    const addCardToCollection = (e) => {
        e.preventDefault()
        // this is the object being sent to the cardcollection array
        const newCard = {
            card: parsedId,
            collection: collectionId
        }
        // if there is nothing in the card array of the collection object OR if nothing is returned from the .find above (found variable)
        if (collection.card?.length === 0 || !found) {
            createCardCollection(newCard).then(history.push('/sets'))
        // if the .find above does return an object and that id is the same as the card id (id from the URL)
        } else if (found.id === parsedId) {
            window.alert("Card already exists in collection")}
            
    }

    return (
        <>
            <h1>Detail</h1>
            <section>
                <p>{card.first_name} {card.last_name}</p>
                <p>Card #{card.card_number}</p>
                <p>Attributes:
                    {
                        card.tag?.map((tag) => {
                            return <>
                                <span> {tag.label} </span>
                            </>
                        })
                    }
                </p>
                <img src={`http://localhost:8000${card.image}`} className="image is-128x128 mr-3"></img>
                <div>
                    <select onChange={(evt) => {
                        let copy = { ...collectionId }
                        copy = evt.target.value
                        setCollectionId(copy)
                    }
                    }>
                        <option>Choose Collection</option>
                        {
                            collections.map((c) => {
                                return <>
                                {
                                    currentUser.id === c.user?.id    
                                        ? <option value={c.id}>{c.name}</option>
                                        : ""
                                }
                                </>
                            })
                        }
                    </select>
                    <button onClick={addCardToCollection}>Add</button>
                </div>
                <div>
                    <button onClick={() => {history.push(`/sets/${card.set?.id}`)}}>Back to Cards</button>
                </div>

            </section>
        </>
    )
}
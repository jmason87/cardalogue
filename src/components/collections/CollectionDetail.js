import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { deleteCardCollection, getCardCollections } from "../cardcollection/CardCollectionManager"
import { getCurrentUser } from "../users/UserManager"
import { getSingleCollection } from "./CollectionManager"
import "./collection.css"


export const CollectionDetail = () => {
    const [collection, setCollection] = useState({})
    const [cardsInCollection, setCardsInCollection] = useState([])
    const [currentUser, setCurrentUser] = useState({})
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

    useEffect(() => {
        getCurrentUser().then(setCurrentUser)
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
        <div className="container text-center mt-4">
            <h1>{collection.name}</h1>
            <h3>Owner: {collection.user?.username}</h3>
            <div>
                <button className="btn btn-md btn-primary m-4" onClick={() => { history.push(`/comments/${parsedId}`) }}>ViewCommetns</button>
                <button className="btn btn-md btn-primary m-4" onClick={() => { history.push('/allcollections') }}>Back to All Collections</button>
                {
                    currentUser.id === collection.user?.id
                        ? <button className="btn btn-md btn-primary m-4" onClick={() => { history.push('/sets') }}>Add Cards</button>
                        : ""
                }
            </div>
        </div>
        <div className="container mt-4">
            <div className="col-md-2 text-center">
                {   // mapping over the card array in the collection object
                    collection.card?.map((card) => {
                        return <>
                            <div className="col">
                                <div className="card bg-light">
                                    <img className="card-img" src={`http://localhost:8000${card.image}`}></img>                    <p>{card.first_name} {card.last_name}</p>
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
                                        {
                                            currentUser.id === collection.user?.id
                                                ? <button className="btn btn-sm btn-danger mb-4"
                                                    //we invoke the function onClick and pass in the card.id as the argument for cardId parameter we set above  
                                                    onClick={() => { foundCardToRemove(card.id) }}>Remove Card</button>
                                                : ""
                                        }
                                    </div>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
        </div>
    </>
}
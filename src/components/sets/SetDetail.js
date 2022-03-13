import React, { useEffect, useState } from "react"
import { deleteCard, getSets, getSingleSet } from "./SetManager"
import { getCards } from "../cards/CardManager"
import { useHistory, Link, useParams } from "react-router-dom"
import { getCollections } from "../collections/CollectionManager"


export const SetDetail = () => {
    const [set, setSet] = useState({})
    const [cards, setCards] =useState([])
    const [collection, setCollections] = useState([])

    const { setId } = useParams()
    const parsedId = parseInt(setId)
    const history = useHistory()

    useEffect(() => {
        getSingleSet(parsedId).then(setSet)
    }, [])

    useEffect(() => {
        getCards().then(setCards)
    }, [])

    useEffect(() => {
        getCollections().then(setCollections)
    }, [])

    const addCardToCollection = (evt) => {
        evt.preventDefault()
        const cardCollection = {
            card: "",
        }
    }

    return ( <> 
        <h1>Set Details</h1>
        <button onClick={()=>{history.push(`/cardform/${set.id}`)}}>Add Card To Set</button>
        {
            cards.map((card) => {
                if (card.set.id == parsedId) {
                    return <>
                    <p>{card.first_name} {card.last_name}</p>
                    <p>Card No. {card.card_number}</p>
                    <p>Attributes:  
                    {
                        card.tag.map((tag) => {
                            return <>
                            <span> {tag.label} </span> 
                            </>
                        })
                    }
                    </p>
                    <img src={`http://localhost:8000${card.image}`} className="image is-128x128 mr-3"></img>
                    <div>

                    <select onChange={() => {
                        
                    }
                }>
                    <option>Choose Collection</option>
                    {
                        collection.map((c) => {
                            return <option value={c.id}>{c.name}</option>
                        })
                    }
                    </select>
                    <button>Add</button>
                    <button onClick={() => {deleteCard(card.id).then(setCards)}}>Delete Card</button>
                    </div>
                    </>
                }
            })
        }
    </>
        
    )
}
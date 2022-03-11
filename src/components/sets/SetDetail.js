import React, { useEffect, useState } from "react"
import { getSets, getSingleSet } from "./SetManager"
import { getCards } from "../cards/CardManager"
import { useHistory, Link, useParams } from "react-router-dom"
import { getCollections } from "../collections/CollectionManager"


export const SetDetail = () => {
    const [set, setSet] = useState({})
    const [cards, setCards] =useState([])
    const [collection, setCollections] = useState([])

    const { setId } = useParams()
    const parsedId = parseInt(setId)

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
        {
            cards.map((card) => {
                if (card.set.id == parsedId) {
                    return <>
                    <p>{card.first_name} {card.last_name}</p>
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
                    </>
                }
            })
        }
    </>
        
    )
}
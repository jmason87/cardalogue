import React, { useEffect, useState } from "react"
import { deleteCard, getSets, getSingleSet, searchCards } from "./SetManager"
import { getCards } from "../cards/CardManager"
import { useHistory, Link, useParams } from "react-router-dom"
import { getCollections } from "../collections/CollectionManager"


export const SetDetail = () => {
    const [set, setSet] = useState({})
    const [cards, setCards] = useState([])
    const [collection, setCollections] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const { setId } = useParams()
    const parsedId = parseInt(setId)
    const history = useHistory()

    useEffect(() => {
        getSingleSet(parsedId).then(setSet)
    }, [])

    // useEffect(() => {
    //     getCards().then(setCards)
    // }, [])

    useEffect(() => {
        getCollections().then(setCollections)
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            searchCards(searchTerms).then(setCards)
        } else {
            getCards().then(setCards)
        }
    }, [searchTerms])

    return (<>
        <h1>Set Details</h1>
        <div>
        <label>Search for Player</label>
        <input type="text" onKeyUp={(e) => {setSearchTerms(e.target.value)}} />
        </div>
        <button onClick={() => { history.push(`/cardform/${set.id}`) }}>Add Card To Set</button>
        <button onClick={() => {history.push("/sets")}}>Back to Sets</button>
        {
            cards.map((card) => {
                if (card.set.id === parsedId) {
                    return <>
                        {
                            card.is_approved
                            ?
                            <ul>
                                <li>#{card.card_number} <Link to={`/carddetail/${card.id}`}>{card.first_name} {card.last_name}</Link></li>
                            </ul>
                            : ""
                        }
                    </>
                }
            })
        }
    </>

    )
}
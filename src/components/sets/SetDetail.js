import React, { useEffect, useState } from "react"
import { deleteCard, getSets, getSingleSet, searchCards } from "./SetManager"
import { getCards } from "../cards/CardManager"
import { useHistory, Link, useParams } from "react-router-dom"
import { getCollections } from "../collections/CollectionManager"
import { getCurrentUser } from "../users/UserManager"


export const SetDetail = () => {
    const [set, setSet] = useState({})
    const [cards, setCards] = useState([])
    const [collection, setCollections] = useState([])
    const [searchTerms, setSearchTerms] = useState("")
    const [currentUser, setCurrentUser] = useState({})

    const { setId } = useParams()
    const parsedId = parseInt(setId)
    const history = useHistory()

    useEffect(() => {
        getSingleSet(parsedId).then(setSet)
    }, [])

    useEffect(() => {
        getCollections().then(setCollections)
    }, [])

    useEffect(() => {
        getCurrentUser().then(setCurrentUser)
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            searchCards(searchTerms).then(setCards)
        } else {
            getCards().then(setCards)
        }
    }, [searchTerms])

    return (<>
        <div className="container-md text-center mt-4">
            <h1>Set Details</h1>
            <button className="btn btn-lg btn-primary mx-4 mt-4" onClick={() => { history.push(`/cardform/${set.id}`) }}>Add Card To Set</button>
            <button className="btn btn-lg btn-primary mx-4 mt-4" onClick={() => { history.push("/sets") }}>Back to Sets</button>
            <div>
                {/* <label className="input-group-text">Search for Player</label> */}
                <input className="mt-4 form-control"  placeholder="Search For Player" type="text" onKeyUp={(e) => { setSearchTerms(e.target.value) }} />
            </div>
        </div>
        {
            cards.map((card) => {
                if (card.set.id === parsedId) {
                    return <>
                        {
                            card.is_approved
                                ?
                                <ul className="list-group list-group-flush text-center mt-4">
                                    <li className="list-group-item">
                                        #{card.card_number} <Link to={`/carddetail/${card.id}`}>{card.first_name} {card.last_name}</Link>
                                        {
                                            currentUser.is_staff
                                                ? <button className="btn btn-sm btn-primary" onClick={() => { deleteCard(card.id).then(setCards) }}>Delete</button>
                                                : ""

                                        }
                                    </li>
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
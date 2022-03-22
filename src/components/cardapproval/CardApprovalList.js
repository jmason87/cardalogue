import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { getCards, approveCard, deleteCard } from "../cards/CardManager"


export const CardApproval = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        getCards().then(setCards)
    }, [])

    return (
        <>
            <div className="container mt-4 text-center">
                <h1>Cards That Need Approval</h1>
            </div>
            <div className="container mt-4 mb-4">
                <div className="row row-cols-4 mt-4">
                    {
                        cards.map((card) => {
                            return <>
                                {
                                    card.is_approved
                                        ? ""
                                        : <div className="col">
                                            <div className="card bg-light text-center p-2">
                                                <img className="card-img" src={`http://localhost:8000${card.image}`}></img>
                                                <h5>{card.first_name} {card.last_name}</h5>
                                                <p>Card #{card.card_number}</p>
                                                <p>Category: {card.card_category.label}</p>
                                                <p>Set: {card.set?.name}</p>
                                                <p>Attributes: 
                                                    { // mapping over the tags array in each card object
                                                        card.tag.map((cardtags) => {
                                                            return <div key={`cardtags--${cardtags.id}`}><strong> {cardtags.label}</strong> </div>
                                                        })
                                                    }
                                                </p>

                                                <button className="btn btn-sm btn-success m-4" onClick={() => { approveCard(card.id).then(setCards) }}>Approve</button>
                                                <button className="btn btn-sm btn-danger m-4" onClick={() => { deleteCard(card.id).then(setCards) }}>Deny</button>
                                            </div>
                                        </div>
                                }
                            </>
                        })
                    }
                </div>
            </div>
        </>
    )
}
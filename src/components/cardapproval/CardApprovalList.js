import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { getCards } from "../cards/CardManager"
import { approveCard } from "../cards/CardManager"


export const CardApproval = () => {
    const [ cards, setCards ] = useState([])

    useEffect(() => {
        getCards().then(setCards)
    }, [])

    return (
        <>
        <h1>Cards That Need Approval</h1>
        {
            cards.map((card) => {
                return <>
                {
                card.is_approved
                    ? ""
                    : <ul>
                        <li>{card.first_name} {card.last_name} <button onClick={() => {approveCard(card.id).then(setCards)}}>Approve</button></li>
                    </ul> 
                    }
            </>
            })
        }
        </>
    )
}
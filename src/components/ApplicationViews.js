import React from "react"
import { Route } from "react-router-dom"
import { Collection, CollectionList } from "./collections/CollectionList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/collections">
                <CollectionList />
            </Route>
        </>
    )
}
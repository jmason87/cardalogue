import React from "react"
import { Route } from "react-router-dom"
import { CollectionList } from "./collections/CollectionList"
import { CollectionForm } from "./collections/CollectionForm"
import { CollectionDetail } from "./collections/CollectionDetail"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/collections">
                <CollectionList />
            </Route>
            <Route exact path="/collectionform">
                <CollectionForm />
            </Route>
            <Route exact path="/collections/:collectionId(\d+)">
                <CollectionDetail />
            </Route>

        </>
    )
}
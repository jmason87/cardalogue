import React from "react"
import { Route } from "react-router-dom"
import { CollectionList } from "./collections/CollectionList"
import { CollectionForm } from "./collections/CollectionForm"
import { CollectionDetail } from "./collections/CollectionDetail"


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/collections">
                <CollectionList />
            </Route>
            <Route path="/collectionform">
                <CollectionForm />
            </Route>
            <Route path="/collectiondetail">
                <CollectionDetail />
            </Route>

        </>
    )
}
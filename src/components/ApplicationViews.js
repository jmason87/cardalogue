import React from "react"
import { Route } from "react-router-dom"
import { CollectionList } from "./collections/CollectionList"
import { CollectionForm } from "./collections/CollectionForm"
import { CollectionDetail } from "./collections/CollectionDetail"
import { SetList } from "./sets/SetList"
import { SetDetail } from "./sets/SetDetail"


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
            <Route exact path="/sets">
                <SetList />
            </Route>
            <Route exact path="/sets/:setId(\d+)">
                <SetDetail />
            </Route>

        </>
    )
}
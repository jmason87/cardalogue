import React from "react"
import { Route } from "react-router-dom"
import { CollectionList } from "./collections/CollectionList"
import { CollectionForm } from "./collections/CollectionForm"
import { CollectionDetail } from "./collections/CollectionDetail"
import { SetList } from "./sets/SetList"
import { SetDetail } from "./sets/SetDetail"
import { CardForm } from "./cards/CardForm"
import { CardDetail } from "./cards/CardDetail"
import { CommentList } from "./comments/CommentList"
import { CommentForm } from "./comments/CommentForm"
import { CommentEdit } from "./comments/CommentEdit"
import { SetForm } from "./sets/SetForm"
import { SetEdit } from "./sets/SetEdit"
import { CardApproval } from "./cardapproval/CardApprovalList"


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
            <Route exact path="/cardform/:setId(\d+)">
                <CardForm />
            </Route>
            <Route exact path="/carddetail/:cardId(\d+)">
                <CardDetail />
            </Route>
            <Route exact path="/comments/:collectionId(\d+)">
                <CommentList />
            </Route>
            <Route exact path="/commentform/:collectionId(\d+)">
                <CommentForm />
            </Route>
            <Route exact path="/editcomment/:commentId(\d+)">
                <CommentEdit />
            </Route>
            <Route exact path="/setform">
                <SetForm />
            </Route>
            <Route exact path="/setedit/:setId(\d+)">
                <SetEdit />
            </Route>
            <Route exact path="/approval">
                <CardApproval />
            </Route>

        </>
    )
}
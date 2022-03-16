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
import { TagList } from "./tags/TagList"
import { TagForm } from "./tags/TagForm"
import { TagEdit } from "./tags/TagEdit"
import { UserList } from "./users/UserList"
import { UserDetail } from "./users/UserDetail"
import { AllCollections } from "./collections/AllCollections"


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
            <Route exact path="/allcollections">
                <AllCollections />
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
            <Route exact path="/tags">
                <TagList />
            </Route>
            <Route exact path="/tagform">
                <TagForm />
            </Route>
            <Route exact path="/tagedit/:tagId(\d+)">
                <TagEdit />
            </Route>
            <Route exact path="/users">
                <UserList />
            </Route>
            <Route exact path="/user/:userId(\d+)">
                <UserDetail />
            </Route>

        </>
    )
}
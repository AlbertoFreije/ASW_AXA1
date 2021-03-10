import Friend from "./Friend";
import LoadingFriend from "./LoadingFriend";
import React from "react";

export default ({webId, fullName, imageSrc, pending}) => (
    pending ?
        <LoadingFriend webId={`${webId}`}/> :
        <Friend
            webId={`${webId}`}
            fullName={`${fullName}`}
            imageSrc={imageSrc ? `${imageSrc}` : undefined}
        />
);
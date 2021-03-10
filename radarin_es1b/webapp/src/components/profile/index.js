import React from 'react';
import useProfile from "./useProfile";
import ProfileContainer from "./Container";

export default ({webId}) => {

    const profile = useProfile(webId);

    return <ProfileContainer
        {...profile}
    />;
}
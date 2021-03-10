import React from 'react';

import { evaluateList } from '@solid/react';

import FriendListContainer from './Container';

const FriendListEvaluation = evaluateList('friends', FriendListContainer);

export default ({webId}) => {
    return <FriendListEvaluation friends={`[${webId}].knows`}/>;
};
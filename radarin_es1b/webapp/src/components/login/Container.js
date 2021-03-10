import React from 'react';
import Button from "@material-ui/core/Button";

import {
    LoggedIn,
    AuthButton
} from '@solid/react';

import LoginBadge from './LoginBadge';

const popupUri = 'https://solidcommunity.net/common/popup.html';

// see https://material-ui.com/guides/composition/#caveat-with-refs
export const AuthButtonComponent = React.forwardRef((props, ref) => <span ref={ref}><AuthButton {...props} /><div
    style={{display: 'none'}}>{props.children}</div></span>)

export default ({fullName, imageSrc, webId}) => {
    return <span>
        <LoggedIn>
          <LoginBadge webId={webId}
                      fullName={fullName ? fullName.toString() : undefined}
                      imageSrc={imageSrc ? imageSrc.toString() : undefined}
          />
        </LoggedIn>
        <Button variant="contained" color="primary" component={AuthButtonComponent}
                popup={popupUri}>
          ...
        </Button>
    </span>;
};
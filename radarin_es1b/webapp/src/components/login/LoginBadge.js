import React from "react";
import {Link} from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';

import Image from '../profile/Image';

import styles from './Login.module.css';
import {toProfile} from "../../routing";

export default ({fullName, imageSrc, webId}) =>
  <Tooltip title={webId || '...'}>
    <Chip
        className={styles.badge}
        label={fullName ? `Logged in as ${fullName}` : 'Logged in'}
        avatar={<Image name={fullName || webId} src={imageSrc}/>}
        component={Link}
        to={toProfile(webId)}
        clickable
    />
  </Tooltip>



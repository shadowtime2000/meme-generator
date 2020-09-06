import React from 'react';
import loadable from '@loadable/component';

import ShareButton from '../ShareButton/ShareButton';

type Props = {
    memeLink: string
}

function Meme(props: Props) {

    return (
        <div className="meme">
            <img src={props.memeLink} alt={""}/><br />
            <ShareButton memeLink={props.memeLink} />
        </div>
    )
}

export default Meme;
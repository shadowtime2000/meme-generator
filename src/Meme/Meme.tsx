import React from 'react';

import { Button } from '@material-ui/core';

import ShareButton from '../ShareButton/ShareButton';

type Props = {
    memeLink: string
}

function Meme(props: Props) {
    const copyLink = () => navigator.clipboard.writeText(props.memeLink);

    return (
        <div className="meme">
            <img src={props.memeLink} alt={""}/><br />
            {props.memeLink === "" ? <Button color="secondary" onClick={copyLink} disabled >Copy Link!</Button> : <Button color="secondary" onClick={copyLink} >Copy Link!</Button>}
            <ShareButton memeLink={props.memeLink} />
        </div>
    )
}

export default Meme;
import React, { useState } from 'react';

import Button from '@material-ui/core/Button/Button';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

import Share from '@material-ui/icons/Share';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

type Props = {
    memeLink: string
}

function ShareButton(props: Props) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const copyLink = () => navigator.clipboard.writeText(props.memeLink);

    return (
        <div>
            {props.memeLink === "" ? <Button disabled><Share /></Button> : <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleOpen}><Share /></Button> }
            <Menu id="share-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={() => {copyLink(); handleClose();}}>Copy Link!</MenuItem>
                <MenuItem onClick={() => window.location.href = `mailto:?subject=Check%20out%20this%20meme!&body=${props.memeLink}`}><EmailIcon /></MenuItem>
                <MenuItem onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(props.memeLink)}&text=${encodeURIComponent("Check out this meme!")}`)}><TwitterIcon /></MenuItem>
                <MenuItem onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(props.memeLink)}`)}><FacebookIcon /></MenuItem>
            </Menu>
        </div>
    )
}

export default ShareButton;
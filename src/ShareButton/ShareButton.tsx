import React, { useState } from 'react';

import { Button, Menu, MenuItem } from '@material-ui/core';
import Share from '@material-ui/icons/Share';

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

    return (
        <div>
            {props.memeLink === "" ? <Button disabled><Share /></Button> : <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleOpen}><Share /></Button> }
            <Menu id="share-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Currently You Cannot Share Things</MenuItem>
            </Menu>
        </div>
    )
}

export default ShareButton;
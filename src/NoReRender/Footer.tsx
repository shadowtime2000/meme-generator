import React, { memo } from 'react';

import { Typography, Link } from '@material-ui/core';

type Props = {
    link: string,
    cleanLink: string
}

function Footer(props: Props) {
    return (
        <div className="footer">
            <Typography variant="body2" color="textSecondary" align="center">
                Memes come from <Link color="inherit" href={props.link}>{props.cleanLink}</Link>
            </Typography>
        </div>
    )
}

export default memo(Footer, () => true);
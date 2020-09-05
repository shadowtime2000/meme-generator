import React, { memo } from 'react';

import Typography from '@material-ui/core/Typography/Typography';
import Link from '@material-ui/core/Link/Link';

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
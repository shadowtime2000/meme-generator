import React, { memo } from 'react';

import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography/Typography';

type Props = {
    head: string
}

function Header(props: Props) {
    return (
        <div className="header">
            <Typography variant="h3" component="h4">
                Meme Generator
            </Typography>
        </div>
    )
}

export default memo(Header, () => true);
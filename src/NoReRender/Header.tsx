import React, { memo } from 'react';

type Props = {
    head: string
}

function Header(props: Props) {
    return (
        <div className="header">
            <h1>{props.head}</h1>
        </div>    
    )
}

export default memo(Header, () => true);
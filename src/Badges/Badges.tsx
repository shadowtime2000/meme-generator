import React from 'react';

import {} from '@material-ui/core';

function Badges() {
    return (
        <div className="badges">
            <img src={`https://img.shields.io/netlify/${process.env.REACT_APP_SITE_ID}?style=for-the-badge`} alt={""} /><br />
        </div>
    )
}

export default Badges;
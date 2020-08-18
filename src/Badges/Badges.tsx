import React from 'react';

import {} from '@material-ui/core';

function Badges() {
    return (
        <div className="badges">
            <img src={`https://img.shields.io/netlify/${process.env.REACT_APP_SITE_ID}?style=for-the-badge`} alt={""} /><br />
            <img src="https://img.shields.io/website?style=for-the-badge&url=https%3A%2F%2Fmeme-creator-app.netlify.app" alt={""} />
        </div>
    )
}

export default Badges;
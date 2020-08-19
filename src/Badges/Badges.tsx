import React from 'react';

import {} from '@material-ui/core';

function Badges() {
    return (
        <div className="badges">
            <img src={`https://img.shields.io/netlify/${process.env.REACT_APP_SITE_ID}?style=for-the-badge`} alt={""} /><br />
            <a href="https://github.com/shadowtime2000/meme-generator/"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt={""} /></a><br/>
        </div>
    )
}

export default Badges;
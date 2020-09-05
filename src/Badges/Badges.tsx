import React from 'react';

import {} from '@material-ui/core';

function Badges() {
    return (
        <div className="badges">
            <img src={`https://img.shields.io/netlify/${process.env.REACT_APP_SITE_ID}?style=for-the-badge`} alt="Netlify Build Status Badge" /><br />
            <img src="https://img.shields.io/github/languages/code-size/shadowtime2000/meme-generator?style=for-the-badge" alt="Code Size for Github repo" /><br />
            <a href="https://github.com/shadowtime2000/meme-generator/fork"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="A PRs Welcome Button" /></a><br/>
        </div>
    )
}

export default Badges;
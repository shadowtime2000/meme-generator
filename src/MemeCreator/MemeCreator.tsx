import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function MemeCreator() {

    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [memeLink, setMemeLink] = useState("");

    const [width, setWidth] = useState(640);
    const [height, setHeight] = useState(320);

    const filterText = (text: string) => {
        const newString = text;
        newString.replace(/ /, "_");
        newString.replace(/_/, "__");
        newString.replace(/-/, "--");
        newString.replace(/\\?/, "~q");
        newString.replace(/%/, "~p");
        newString.replace(/#/, "~h");
        newString.replace(/\//, "~s");
        newString.replace(/"/, "''");
        return newString;
    }

    const createMeme = () => {
        if (topText === "" || bottomText === "" || imageLink === "") return;
        const t = filterText(topText);
        const b = filterText(bottomText);
        setMemeLink(`https://memegen.link/custom/${t}/${b}.jpg?width=${width}&height=${height}&alt=${imageLink}`);
    }

    const copyLink = () => navigator.clipboard.writeText(memeLink);

    return (
        <div className="meme-creator container">
            <img src={memeLink} alt={memeLink} onClick={copyLink} /><br />
            <label>Top Text: </label><input className="top-text form-control" value={topText} onChange={(e) => setTopText(e.target.value)} /><br />
            <label>Bottom Text: </label><input className="bottom-text form-control" value={bottomText} onChange={(e) => setBottomText(e.target.value)} /><br />
            <label>Image URL: </label><input className="image-link form-control" value={imageLink} onChange={(e) => setImageLink(e.target.value)} /><br />
            <button className="create-meme btn btn-primary" onClick={createMeme}>Create Meme!</button><br />
            <label>Size: </label><input value={width} onChange={(e) => setWidth(parseInt(e.target.value))} className="width size form-control" /> x <input value={height} onChange={(e) => setHeight(parseInt(e.target.value))} className="height size form-control" />
        </div>
    )
}

export default MemeCreator;
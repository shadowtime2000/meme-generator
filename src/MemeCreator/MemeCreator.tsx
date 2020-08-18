import React, { useState } from 'react';

import { Input, Button, InputLabel, Checkbox, FormControlLabel } from '@material-ui/core';

import Meme from '../Meme/Meme';

function MemeCreator() {

    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [memeLink, setMemeLink] = useState("");

    const [width, setWidth] = useState(640);
    const [height, setHeight] = useState(320);

    const [watermark, setWatermark] = useState(true);

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
        setMemeLink(`https://memegen.link/custom/${t}/${b}.jpg?width=${width}&height=${height}&alt=${imageLink}&watermark=${watermark}`);
    }

    return (
        <div className="meme-creator">
            <Meme memeLink={memeLink} /><br />
            <InputLabel>Top Text: </InputLabel><Input value={topText} onChange={(e) => setTopText(e.target.value)} /><br />
            <InputLabel>Bottom Text: </InputLabel><Input value={bottomText} onChange={(e) => setBottomText(e.target.value)} /><br />
            <InputLabel>Image URL: </InputLabel><Input type="url" value={imageLink} onChange={(e) => setImageLink(e.target.value)} /><br />
            <Input value={width} onChange={(e) => setWidth(parseInt(e.target.value))} className="width size" /> x <Input value={height} onChange={(e) => setHeight(parseInt(e.target.value))} className="height size" /><br /><br />
            <FormControlLabel control={<Checkbox name="Watermark" onChange={(e) => setWatermark(e.target.checked)} checked={watermark} />} label="Watermark" /><br />
            <Button variant="contained" color="primary" onClick={createMeme}>Create Meme!</Button>
        </div>
    )
}

export default MemeCreator;
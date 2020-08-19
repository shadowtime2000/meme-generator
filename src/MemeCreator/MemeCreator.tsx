import React, { useState } from 'react';

import { Input, Button, InputLabel, Checkbox, FormControlLabel, MenuItem, Select } from '@material-ui/core';

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
        let newString = text;
        newString = newString.replace("_", "__");
        newString = newString.replace(" ", "_");
        newString = newString.replace("-", "--");
        newString = newString.replace("?", "~q");
        newString = newString.replace(/%/, "~p");
        newString = newString.replace(/#/, "~h");
        newString = newString.replace(/\//, "~s");
        newString = newString.replace(/"/, "''");
        return newString;
    }

    const createMeme = () => {
        if (topText === "" || bottomText === "" || imageLink === "") return;
        const t = filterText(topText);
        const b = filterText(bottomText);
        setMemeLink(`https://memegen.link/custom/${t}/${b}.jpg?alt=${encodeURIComponent(imageLink)}&width=${width}&height=${height}&watermark=${watermark}`);
    }

    return (
        <div className="meme-creator">
            <Meme memeLink={memeLink} /><br />
            <InputLabel>Top Text: </InputLabel><Input value={topText} onChange={(e) => setTopText(e.target.value)} /><br />
            <InputLabel>Bottom Text: </InputLabel><Input value={bottomText} onChange={(e) => setBottomText(e.target.value)} /><br />
            <InputLabel>Image URL: </InputLabel><Input type="url" value={imageLink} onChange={(e) => setImageLink(e.target.value)} /> or 
            <InputLabel>Select Meme</InputLabel>
            <Select onChange={(e) => setImageLink(e.target.value as string)}>
                <MenuItem value={"https://memegen.link/buzz/"}>Buzz Lightyear</MenuItem>
                <MenuItem value={"https://memegen.link/afraid/"}>Afraid To Ask Andy</MenuItem>
                <MenuItem value={"https://memegen.link/trump/"}>Donald Trump</MenuItem>
                <MenuItem value={"https://memegen.link/spongebob/"}>Spongebob Squarepants</MenuItem>
                <MenuItem value={"https://memegen.link/tenguy/"}>Ten Guy</MenuItem>
                <MenuItem value={"https://memegen.link/sad-biden/"}>Sad Joe Biden</MenuItem>
                <MenuItem value={"https://memegen.link/sad-boehner/"}>Sad John Boehner</MenuItem>
                <MenuItem value={"https://memegen.link/sad-clinton/"}>Sad Bill Clinton</MenuItem>
                <MenuItem value={"https://memegen.link/sad-obama/"}>Sad Barack Obama</MenuItem>
                <MenuItem value={"https://memegen.link/patrick/"}>Patrick Star</MenuItem>
            </Select><br />
            <Input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value))}/> x <Input value={height} onChange={(e) => setHeight(parseInt(e.target.value))} type="number" /><br /><br />
            <FormControlLabel control={<Checkbox name="Watermark" onChange={(e) => setWatermark(e.target.checked)} checked={watermark} />} label="Watermark" /><br />
            <Button variant="contained" color="primary" onClick={createMeme}>Create Meme!</Button>
        </div>
    )
}

export default MemeCreator;
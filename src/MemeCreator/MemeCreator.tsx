import React, { useState } from 'react';
import loadable from '@loadable/component';

import Input from '@material-ui/core/Input/Input';
import Button from '@material-ui/core/Button/Button';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Select from '@material-ui/core/Select/Select';
import Grid from '@material-ui/core/Grid/Grid';

const Meme = loadable(() => import( /* webpackChunkName: "meme" */ "../Meme/Meme"));

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
        <Grid container spacing={3} className="meme-creator">
            <Grid item lg={12} xs={12}>
                <Meme memeLink={memeLink} /><br />
            </Grid>
            <Grid item lg={3} xs={undefined}></Grid>
            <Grid item lg={3} xs={12}>
                <InputLabel>Top Text: </InputLabel><Input value={topText} onChange={(e) => setTopText(e.target.value)} /><br />
            </Grid>
            <Grid item lg={3} xs={12}>
                <InputLabel>Bottom Text: </InputLabel><Input value={bottomText} onChange={(e) => setBottomText(e.target.value)} /><br />
            </Grid>
            <Grid item lg={3} xs={undefined}></Grid>
            <Grid item lg={3} xs={undefined}></Grid>
            <Grid item lg={3} xs={12}>
                <InputLabel>Image URL: </InputLabel><Input type="url" value={imageLink} onChange={(e) => setImageLink(e.target.value)} />
            </Grid>
            <Grid item lg={3} xs={12}>
                <InputLabel>Select Meme</InputLabel>
                <Select style={{minWidth: 200}} onChange={(e) => setImageLink(e.target.value as string)}>
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
            </Grid>
            <Grid item lg={3} xs={undefined}></Grid>
            <Grid item lg={3} xs={undefined}></Grid>
            <Grid item lg={3} xs={12}>
                <InputLabel>Width</InputLabel><Input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value))} />
            </Grid>
            <Grid item lg={3} xs={12}>
                <InputLabel>Height</InputLabel><Input type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value))} />
            </Grid>
            <Grid item lg={3} xs={undefined}></Grid>
            <Grid item lg={12} xs={12}>
                <FormControlLabel control={<Checkbox name="Watermark" onChange={(e) => setWatermark(e.target.checked)} checked={watermark} />} label="Watermark" /><br />
            </Grid>
            <Grid item lg={12} xs={12}>
                <Button variant="contained" color="primary" onClick={createMeme}>Create Meme!</Button>
            </Grid>
        </Grid>
    )
}

export default MemeCreator;
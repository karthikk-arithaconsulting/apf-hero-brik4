/* eslint-disable react/prop-types */
import {Title, Text,Button,Card,Group} from "@apf/core";
import React from "react";
import "./HeroBrikFour.css";
import "@apf/core/dist/style.css";


function HeroBrikFour(props){
    // const imageObject = props.data.data.find(item => item?.content?.type === "img" && item?.content?.label === "main image");
    const titleObject = props?.data?.data?.find(item => item?.content?.type === "title");
    const textObject = props?.data?.data?.find(item => item?.content?.type === "text");
    const buttonObject = props?.data?.data?.find(item => item?.content?.type === "button");
    const backgroundImage = props?.data?.data?.find(item => item?.content?.type === "img" && item?.content?.label === "Background image");
    const backgroundColor = props?.data?.style?.backgroundColor;
    const cardTitleOne = props?.data?.data?.find(item => item?.content?.type === "title" && item?.content?.for === "card title" && item?.content?.label === "Card One Tilte");
    const cardTitleTwo = props?.data?.data?.find(item => item?.content?.type === "title" && item?.content?.for === "card title" && item?.content?.label === "Card Two Tilte");
    const cardTitleThree = props?.data?.data?.find(item => item?.content?.type === "title" && item?.content?.for === "card title" && item?.content?.label === "Card Three Tilte");
    const cardTextOne = props?.data?.data?.find(item => item?.content?.type === "subtext" && item?.content?.for === "card text" && item?.content?.label === "Card One Text");
    const cardTextTwo = props?.data?.data?.find(item => item?.content?.type === "subtext" && item?.content?.for === "card text" && item?.content?.label === "Card Two Text");
    const cardTextThree = props?.data?.data?.find(item => item?.content?.type === "subtext" && item?.content?.for === "card text" && item?.content?.label === "Card Three Text");
    const cardImageOne = props?.data?.data?.find(item => item?.content?.type === "img" && item?.content?.label === "Card One");
    const cardImageTwo = props?.data?.data?.find(item => item?.content?.type === "img" && item?.content?.label === "Card Two");
    const cardImageThree = props?.data?.data?.find(item => item?.content?.type === "img" && item?.content?.label === "Card Three");
    return(
        <div className="Hero-container">
            <div className="backgroundImage" style={backgroundImage && backgroundImage.content.src? null :  {backgroundColor: `${backgroundColor}` }}>
                {backgroundImage && backgroundImage.content.src &&<img src={backgroundImage.content.src} className="backgroundImageTag"></img>}
            </div>
            <div className="Hero-content-container">
                <div className="Hero-child-content-container">
                    <Title c={titleObject?.style?.font?.color} fz={titleObject?.style?.font?.size}  style={{ fontFamily: titleObject?.style?.font?.family }} fw={titleObject?.style?.font?.weight} className="Hero-Title-div">{titleObject?.content?.value}</Title>
                    <Text c={textObject?.style?.font.color} fz={textObject?.style?.font?.size} style={{ fontFamily: textObject?.style?.font?.family }} fs={textObject?.style?.font?.style} fw={textObject?.style?.font?.weight} className="Hero-Text-div">{textObject?.content?.value}</Text>
                    <Button style={{ color: buttonObject?.style?.font.color, backgroundColor: buttonObject?.style?.backgroundColor ,fontFamily: buttonObject?.style.font.family}}  size={buttonObject?.style.font.size} variant="filled" radius={buttonObject?.style?.radius} className="Hero-Button-div">{buttonObject?.content.value}</Button>
                </div>
            </div> 
            <div className="Hero-image-container">
                {/* <img src={imageObject?.content?.src} className="ChildImageTag"></img> */}
                <Card className="ParentCardTag">
                        <Group className="CardGroupContainer">
                            <Card className="CardChildTag" > 
                                <img src={cardImageOne?.content?.src}className="CardImageTag"></img>
                                <Title c={cardTitleOne?.style?.font?.color} fz={cardTitleOne?.style?.font?.size}  style={{ fontFamily: cardTitleOne?.style?.font?.family }} fw={cardTitleOne?.style?.font?.weight} className="CardTitleTag">{cardTitleOne?.content?.value}</Title>
                                <Text c={cardTextOne?.style?.font.color} fz={cardTextOne?.style?.font?.size} style={{ fontFamily: cardTextOne?.style?.font?.family }} fs={cardTextOne?.style?.font?.style} fw={cardTextOne?.style?.font?.weight} className="CardTextTag">{cardTextOne?.content?.value}</Text>
                            </Card>
                            <Card className="CardChildTag">
                                <img src={cardImageTwo?.content?.src} className="CardImageTag"></img>
                                <Title c={cardTitleTwo?.style?.font?.color} fz={cardTitleTwo?.style?.font?.size}  style={{ fontFamily: cardTitleTwo?.style?.font?.family }} fw={cardTitleTwo?.style?.font?.weight} className="CardTitleTag">{cardTitleTwo?.content?.value}</Title>
                                <Text c={cardTextTwo?.style?.font.color} fz={cardTextTwo?.style?.font?.size} style={{ fontFamily: cardTextTwo?.style?.font?.family }} fs={cardTextTwo?.style?.font?.style} fw={cardTextTwo?.style?.font?.weight} className="CardTextTag">{cardTextTwo?.content?.value}</Text>
                            </Card>
                            <Card className="CardChildTag">
                                <img src={cardImageThree?.content?.src} className="CardImageTag"></img>
                                <Title c={cardTitleThree?.style?.font?.color} fz={cardTitleThree?.style?.font?.size}  style={{ fontFamily: cardTitleThree?.style?.font?.family }} fw={cardTitleThree?.style?.font?.weight}className="CardTitleTag">{cardTitleThree?.content?.value}</Title>
                                <Text c={cardTextThree?.style?.font.color} fz={cardTextThree?.style?.font?.size} style={{ fontFamily: cardTextThree?.style?.font?.family }} fs={cardTextThree?.style?.font?.style} fw={cardTextThree?.style?.font?.weight} className="CardTextTag">{cardTextThree?.content?.value}</Text>
                            </Card>
                        </Group>
                </Card>
            </div>
        </div>
    );
}
export default HeroBrikFour;
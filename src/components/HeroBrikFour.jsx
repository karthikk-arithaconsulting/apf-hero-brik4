/* eslint-disable react/prop-types */
import { Title, Text, Button } from "@apf/core";
import React from "react";
import "./HeroBrikFour.css";
import "@apf/core/dist/style.css";

function HeroBrikFour(props) {
  // const imageObject = props.data.data.find(item => item?.content?.type === "img" && item?.content?.label === "main image");
  const titleObject = props?.data?.data?.find(
    (item) => item?.content?.type === "title",
  );
  const textObject = props?.data?.data?.find(
    (item) => item?.content?.type === "text",
  );
  const buttonObject = props?.data?.data?.find(
    (item) => item?.content?.type === "button",
  );
  const backgroundImage = props?.data?.data?.find(
    (item) =>
      item?.content?.type === "img" &&
      item?.content?.label === "Background image",
  );
  // const backgroundColor = props?.data?.style?.backgroundColor;
  const titleOne = props?.data?.data?.find(
    (item) =>
      item?.content?.type === "title" && item?.content?.for === "title one",
  );
  const titletwo = props?.data?.data?.find(
    (item) =>
      item?.content?.type === "title" && item?.content?.for === "title two",
  );
  const titlethree = props?.data?.data?.find(
    (item) =>
      item?.content?.type === "title" && item?.content?.for === "title three",
  );
  const textOne = props?.data?.data?.find(
    (item) =>
      item?.content?.type === "text" && item?.content?.for === "subtext one",
  );
  const textTwo = props?.data?.data?.find(
    (item) =>
      item?.content?.type === "text" && item?.content?.for === "subtext two",
  );
  const textThree = props?.data?.data?.find(
    (item) =>
      item?.content?.type === "text" && item?.content?.for === "subtext three",
  );
  const subImageOne = props?.data?.data?.find(
    (item) =>
      item?.content?.type === "img" && item?.content?.label === "subImage one",
  );
  const subImageTwo = props?.data?.data?.find(
    (item) =>
      item?.content?.type === "img" && item?.content?.label === "subImage two",
  );
  const subImageThree = props?.data?.data?.find(
    (item) =>
      item?.content?.type === "img" &&
      item?.content?.label === "subImage three",
  );

  return (
    <div
      className="Hero-container"
      style={{ backgroundColor: props?.data?.style?.backgroundColor ,height: props?.data?.style?.height}}
    >
      <div className="backgroundImage">
        {backgroundImage &&
          backgroundImage.content.src &&
          backgroundImage?.display === "block" && (
            <img
              src={backgroundImage.content.src}
              className="backgroundImageTag"
            ></img>
          )}
      </div>
      <div className="Hero-content-container">
        <div className="left-container">
          {titleObject && titleObject?.display === "block" && (
            <div className="title-div">
              <Title
                c={titleObject?.style?.font?.color}
                fz={titleObject?.style?.font?.size}
                style={{ fontFamily: titleObject?.style?.font?.family }}
                fw={titleObject?.style?.font?.weight}
                className="Hero-Title-div"
              >
                {titleObject?.content?.value}
              </Title>
            </div>
          )}
          {textObject && textObject?.display === "block" && (
            <div className="text-div">
              <Text
                c={textObject?.style?.font.color}
                fz={textObject?.style?.font?.size}
                style={{ fontFamily: textObject?.style?.font?.family }}
                fs={textObject?.style?.font?.style}
                fw={textObject?.style?.font?.weight}
                className="Hero-Text-div"
              >
                {textObject?.content?.value}
              </Text>
            </div>
          )}
          {buttonObject && buttonObject?.display === "block" && (
            <div className="button-div">
              <Button
                style={{
                  color: buttonObject?.style?.font.color,
                  backgroundColor: buttonObject?.style?.backgroundColor,
                  fontFamily: buttonObject?.style.font.family,
                }}
                size={buttonObject?.style.font.size}
                variant="filled"
                radius={buttonObject?.style?.radius}
                className="Hero-Button-div"
              >
                {buttonObject?.content.value}
              </Button>
            </div>
          )}
        </div>
        <div className="right-container">
          <div className="right-child-content">
            <div className="content-1">
              {subImageOne &&
                subImageOne.content.src &&
                subImageOne?.display === "block" && (
                  <div className="subImage">
                    <img
                      src={subImageOne.content.src}
                      className="subImage-div"
                    ></img>
                  </div>
                )}
              <div className="content-2">
                {titleOne && titleOne?.display === "block" && (
                  <div className="subtitle-one-div">
                    <Title
                      c={titleOne?.style?.font?.color}
                      fz={titleOne?.style?.font?.size}
                      style={{ fontFamily: titleOne?.style?.font?.family }}
                      fw={titleOne?.style?.font?.weight}
                      className="sub-title-one"
                    >
                      {titleOne?.content?.value}
                    </Title>
                  </div>
                )}
                {textOne && textOne?.display === "block" && (
                  <div className="subtext-div">
                    <Text
                      c={textOne?.style?.font.color}
                      fz={textOne?.style?.font?.size}
                      style={{ fontFamily: textOne?.style?.font?.family }}
                      fs={textOne?.style?.font?.style}
                      fw={textOne?.style?.font?.weight}
                      className="sub-Text-div"
                    >
                      {textOne?.content?.value}
                    </Text>
                  </div>
                )}
              </div>
            </div>
            <div className="content-1">
              {subImageTwo &&
                subImageTwo?.content?.src &&
                subImageTwo?.display === "block" && (
                  <div className="subImage">
                    <img
                      src={subImageTwo?.content?.src}
                      className="subImage-div"
                    ></img>
                  </div>
                )}
              <div className="content-2">
                {titletwo && titletwo?.display === "block" && (
                  <div className="subtitle-one-div">
                    <Title
                      c={titletwo?.style?.font?.color}
                      fz={titletwo?.style?.font?.size}
                      style={{ fontFamily: titletwo?.style?.font?.family }}
                      fw={titletwo?.style?.font?.weight}
                      className="sub-title-one"
                    >
                      {titletwo?.content?.value}
                    </Title>
                  </div>
                )}
                {textTwo && textTwo?.display === "block" && (
                  <div className="subtext-div">
                    <Text
                      c={textTwo?.style?.font.color}
                      fz={textTwo?.style?.font?.size}
                      style={{ fontFamily: textTwo?.style?.font?.family }}
                      fs={textTwo?.style?.font?.style}
                      fw={textTwo?.style?.font?.weight}
                      className="sub-Text-div"
                    >
                      {textTwo?.content?.value}
                    </Text>
                  </div>
                )}
              </div>
            </div>
            <div className="content-1">
              {subImageThree &&
                subImageThree?.content?.src &&
                subImageThree?.display === "block" && (
                  <div className="subImage">
                    <img
                      src={subImageThree?.content?.src}
                      className="subImage-div"
                    ></img>
                  </div>
                )}
              <div className="content-2">
                {titlethree && titlethree?.display === "block" && (
                  <div className="subtitle-one-div">
                    <Title
                      c={titlethree?.style?.font?.color}
                      fz={titlethree?.style?.font?.size}
                      style={{ fontFamily: titlethree?.style?.font?.family }}
                      fw={titlethree?.style?.font?.weight}
                      className="sub-title-one"
                    >
                      {titlethree?.content?.value}
                    </Title>
                  </div>
                )}
                {textThree && textThree?.display === "block" && (
                  <div className="subtext-div">
                    <Text
                      c={textThree?.style?.font.color}
                      fz={textThree?.style?.font?.size}
                      style={{ fontFamily: textThree?.style?.font?.family }}
                      fs={textThree?.style?.font?.style}
                      fw={textThree?.style?.font?.weight}
                      className="sub-Text-div"
                    >
                      {textThree?.content?.value}
                    </Text>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroBrikFour;

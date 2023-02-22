import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

import styles from "../style";

function Share(props) {
  let { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [creator, setCreator] = useState("");
  const [imgUri, setImgUri] = useState("");
  const [pbUri, setPbUri] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/recieve_content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: props.type,
        id: id,
      }),
    }).then((resp) => {
      resp.json().then((data) => {
        console.log(data);
        if (data == "post or event does not exist!") {
          setTitle("Post abo Ewent njedawa!");
        } else {
          setTitle(data.title);
          setDescription(data.description);
          setCreator(data.creator.name);
          setPbUri(data.creator.pic);
          setImgUri(data.img);
        }
      });
    });
  });

  return (
    <div>
      <div>
        <img src={pbUri} />
        <h1 className="font-barlow font-normal text-[18px] leading-[24px] text-dimWhite">
          {creator}
        </h1>
      </div>
      {props.type == "event" ? (
        <h1 className="font-barlow font-normal text-[18px] leading-[24px] text-dimWhite">
          karta dawa jenož w app
        </h1>
      ) : null}
      <img src={imgUri}></img>
      <h1 className="font-barlow font-normal text-[18px] leading-[24px] text-dimWhite">
        {title}
      </h1>
      <h2 className="font-barlow font-normal text-[18px] leading-[24px] text-dimWhite">
        {description}
      </h2>
    </div>
  );
}

export default Share;

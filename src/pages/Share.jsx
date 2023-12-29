import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "../style";

function Share(props) {
    let { id, type } = useParams();

    const [contentData, setContentData] = useState({
        title: "",
        description: "",
        creator: {
            name: "",
            pic: "",
        },
        img: "",
        isBanned: false,
    });

    useEffect(() => {
        let t = 0;
        if (type == "e") t = 1;
        fetch("https://kostrjanc.ew.r.appspot.com/share/recieve_content", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                type: t,
            }),
        })
            .then(resp =>
                resp.json().then(data => {
                    console.log(data);
                    if (data != "post or event does not exist!")
                        if (!data.isBanned) setContentData(data);
                        else document.location = "/";
                    else console.log("error");
                })
            )
            .catch(error =>
                console.log("error share", "get Post/Event Data", error)
            );
    }, []);

    return (
        <div className="p-2">
            <div className="flex flex-row items-center">
                <img
                    src={contentData.creator.pic}
                    className="max-w-[48px] aspect-square rounded-full"
                />
                <h1 className="ml-2 font-barlow font-bold text-[24px] leading-[24px] text-white">
                    {contentData.creator.name}
                </h1>
            </div>
            {type == "p" ? (
                <img
                    src={contentData.img}
                    className="mt-5 flex rounded-xl"></img>
            ) : (
                <div className="mt-5 rounded-xl flex aspect-square border-dimWhite items-center justify-center w-full border-[1px]">
                    <h1 className="text-center font-barlow font-normal text-[24px] leading-[32px] text-white w-52">
                        Karta dawa jenož w kostrjanc App!
                    </h1>
                </div>
            )}
            <h1 className="mt-5 font-barlow font-bold text-[32px] leading-[32px] text-white">
                {contentData.title.replace("∂", "")}
            </h1>
            <h2 className="mt-2 font-barlow font-normal text-[18px] leading-[24px] text-white">
                {contentData.description.replace("∂", "")}
            </h2>
            <p className="mt-5 font-barlow font-normal text-[18px] leading-[24px] text-dimWhite">
                Wšitke informacije namakaš w kostrjanc App!
            </p>
        </div>
    );
}

export default Share;

// function getContent() {
//     const searches = document.location.search
//         .split("?")
//         .filter(a => a.length !== 0);

//     if (
//         searches.length !== 2 ||
//         !(searches[0] === "t=p" || searches[0] === "t=e")
//     )
//         return;

//     const type = searches[0];
//     const id = searches[1].substring(3);

//     fetch(process.env.SHARE_URL, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             id: id,
//             type: type == "t=p" ? 0 : 1,
//         }),
//     })
//         .then(rsp =>
//             rsp.json().then(data => setData(type == "t=p" ? 0 : 1, data))
//         )
//         .catch(e => console.log(e));
// }

// function setData(type, data) {
//     const container = document.getElementById("container");
//     if (data.isBanned) return;

//     container.innerHTML += `
//         <div class="header">
//             <img src="${data.creator.pic}" alt="profilny wobraz" />
//             <p>${data.creator.name}</p>
//         </div>
//         <div class="body">
//             <h2>${data.title}</h2>
//     `;

//     if (type === 0)
//         container.innerHTML += `
//             <img class="image" src="${data.img}" />
//         `;
//     else
//         container.innerHTML += `
//             <div class="map-box">
//                 <p>Karta dawa jenož w kostrjanc App!</p>
//             </div>
//         `;

//     container.innerHTML += `
//         <div class="text-box">
//             <p>${data.description}</p>
//             <p>Wšitke informacije namakaš w kostrjanc App!</p>
//         </div>
//         </div>
//     `;
// }

function openApp() {
    const searches = document.location.search
        .split("?")
        .filter(a => a.length !== 0);

    if (
        searches.length !== 2 ||
        !(searches[0] === "t=p" || searches[0] === "t=e")
    )
        return;

    const type = searches[0];
    const id = searches[1].substring(3);

    window.open(`kostrjanc://${type}/${id}`);
}

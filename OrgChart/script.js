document.addEventListener('DOMContentLoaded', () => {
    const nodeDetails = {
        "Bahubali": {
            age: "30",
            description: "The righteous heir to the throne of Mahishmati.",
            photo: "images/bahubali.jpg",
            height: "6'2\"",
            weight: "220 lbs"
        },
        "Amarendra": {
            age: "32",
            description: "The valiant warrior and true successor to the throne.",
            photo: "images/amarendra.jpg",
            height: "6'0\"",
            weight: "200 lbs"
        },
        "Mahendra": {
            age: "25",
            description: "The son of Bahubali, destined to bring justice.",
            photo: "images/mahendra.jpg",
            height: "5'11\"",
            weight: "180 lbs"
        },
        "Shivudu": {
            age: "23",
            description: "The name given to Mahendra as he grew up as a commoner.",
            photo: "images/shivudu.jpg",
            height: "6'0\"",
            weight: "190 lbs"
        },
        "Bhallaladeva": {
            age: "35",
            description: "The power-hungry cousin of Bahubali.",
            photo: "images/bhallaladeva.jpg",
            height: "6'3\"",
            weight: "230 lbs"
        },
        "Rana": {
            age: "37",
            description: "The epitome of evil and antagonist of the story.",
            photo: "images/rana.jpg",
            height: "6'4\"",
            weight: "240 lbs"
        },
        "Palvaalthevan": {
            age: "40",
            description: "A conniving character with dark intentions.",
            photo: "images/palvaalthevan.jpg",
            height: "5'10\"",
            weight: "175 lbs"
        },
        "Bijjaladeva": {
            age: "50",
            description: "The cunning and manipulative father of Bhallaladeva.",
            photo: "images/bijjaladeva.jpg",
            height: "5'8\"",
            weight: "160 lbs"
        },
        "Kattappa": {
            age: "45",
            description: "The loyal warrior and protector of the royal family.",
            photo: "images/kattappa.jpg",
            height: "5'9\"",
            weight: "170 lbs"
        }
    };

    const nodeLinks = document.querySelectorAll('.tree li a');
    const detailsContainer = document.getElementById('details-container');

    nodeLinks.forEach(nodeLink => {
        nodeLink.addEventListener('click', (event) => {
            event.preventDefault();
            const characterName = nodeLink.querySelector('span').textContent;

            if (nodeDetails.hasOwnProperty(characterName)) {
                const character = nodeDetails[characterName];
                detailsContainer.innerHTML = `
                    <h2>${characterName}</h2>
                    <img src="${character.photo}" alt="${characterName}" width="150">
                    <p>Age: ${character.age}</p>
                    <p>Height: ${character.height}</p>
                    <p>Weight: ${character.weight}</p>
                    <p>${character.description}</p>
                `;
            }
        });
    });
});

const startButton = document.querySelector('.start-button');
const card = document.querySelector('.card');

startButton.addEventListener('click', () => {
    // Trigger the card flip
    card.classList.add('flip');
});



const getData = () => [
    { imgSrc: "./images/pookie-G.png", name: "P-G" },
    { imgSrc: "./images/pink-Alien.png", name: "P-F" },
    { imgSrc: "./images/P-Alien.png", name: "P-M" },
    { imgSrc: "./images/Y-Alien.png", name: "P-I" },
    { imgSrc: "./images/Bana-Alien.png", name: "P-J" },
    { imgSrc: "./images/O-Alien.png", name: "P-K" },
    { imgSrc: "./images/PK-Alien.png", name: "P-L" },
    { imgSrc: "./images/OP-Alien.png", name: "P-G" },


    { imgSrc: "./images/pookie-G.png", name: "P-N" },
    { imgSrc: "./images/pink-Alien.png", name: "P-F" },
    { imgSrc: "./images/P-Alien.png", name: "P-M" },
    { imgSrc: "./images/Y-Alien.png", name: "P-I" },
    { imgSrc: "./images/Bana-Alien.png", name: "P-J" },
    { imgSrc: "./images/O-Alien.png", name: "P-K" },
    { imgSrc: "./images/PK-Alien.png", name: "P-L" },
    { imgSrc: "./images/OP-Alien.png", name: "P-G" },


];


const shuffleImages = getData().sort(() => Math.random() - 0.5);

for (let i = 0; i < shuffleImages.length; i++) {
    let box = document.createElement('div');
    box.className = "item";

    // Create an img element and set its src attribute
    let img = document.createElement('img');
    img.src = shuffleImages[i].imgSrc;
    img.alt = shuffleImages[i].name; // Set alt text for accessibility

    // Append the img element to the box
    box.appendChild(img);

    box.onclick = function () {
        this.classList.add('Boxopen');
        setTimeout(function () {
            let openBoxes = document.querySelectorAll('.Boxopen');
            
            if (openBoxes.length === 2) {
                // Compare the images by src attribute
                let firstImageSrc = openBoxes[0].querySelector('img').src;
                let secondImageSrc = openBoxes[1].querySelector('img').src;
    
                if (firstImageSrc === secondImageSrc) {
                    openBoxes[0].classList.add('BoxMatch');
                    openBoxes[1].classList.add('BoxMatch');
                } else {
                    // No match: remove the 'Boxopen' class to close the cards
                    openBoxes[0].classList.remove('Boxopen');
                    openBoxes[1].classList.remove('Boxopen');
                }
                // Reset open boxes for the next comparison
                openBoxes.forEach(box => box.classList.remove('Boxopen'));
            }
    
            // Check if all cards are matched
            if (document.querySelectorAll('.BoxMatch').length === shuffleImages.length) {
                alert("Win");
            }
    
        }, 500);
    }
    

    // Append the box to the game container
    document.querySelector('.game').appendChild(box);
}

// box.onclick = function () {
//     this.classList.add('Boxopen');
//     setTimeout(function () {
//         if (document.querySelectorAll('.Boxopen').length > 1) {
//             if (document.querySelectorAll('.Boxopen')[0].innerHTML == document.querySelectorAll('.Boxopen')[1].innerHTML) {

//                 document.querySelectorAll('.Boxopen')[0].classList.add('BoxMatch');
//                 document.querySelectorAll('.Boxopen')[1].classList.add('BoxMatch');

//                 document.querySelectorAll('.Boxopen')[1].classList.remove('BoxMatch');
//                 document.querySelectorAll('.Boxopen')[0].classList.remove('BoxMatch');

//                 if (document.querySelectorAll('.BoxMatch').length == shuffleImages.length) {
//                     alert(Win);
//                 }

//             }
//             else {
//                 document.querySelectorAll('.Boxopen')[1].classList.remove('BoxMatch');
//                 document.querySelectorAll('.Boxopen')[0].classList.remove('BoxMatch');
//             }
//         }
//     }, 500)
// }



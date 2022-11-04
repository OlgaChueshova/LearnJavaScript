// setTimeout(() => {
//     console.log("khjjhf");
// }, 2000);


// setInterval(() => {
//     console.log('nhvcv')
// }, 1000)

const box = document.querySelector('.box');

const animateElement = (element, duration, distance) => {
    const frame = duration / 1000 * 60;
    const delta = distance / frame;

    let currentX = element.getBoundingClientRect().x;
    const maxX = currentX + distance;

    const callback = () => {
        currentX += delta;
        element.style.transform = `translate(${currentX}px)`;
        while (currentX <= maxX) {
            requestAnimationFrame(callback);
        }

    }

    requestAnimationFrame(callback);
}

box.addEventListener('click', animateElement);



const loadImage = (src, callback) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = src;
        image.addEventListener('load', () => {
            resolve(image);
        })
        image.addEventListener('error', () => {
            reject(new Error('njbccvc'))
        })
    })
}

const src = "mjkjbghcvc";

loadImage(src);

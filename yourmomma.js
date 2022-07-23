const momURL = 'https://api.yomomma.info/';

// import cors from 'cors';
// const cors = require('cors');
// app.use(cors());

// https://api.yomomma.info/ 
// you momma jokes

const btn2 = document.querySelector('.btn2');
const result2 = document.querySelector('.result2');

btn2.addEventListener('click', () => {
    mommaJoke();
});



const mommaJoke = async() => {

    const response2 = await fetch(momURL, {
        headers: { // think of header as info about our request
            Accept: 'application/json',
            'User-Agent': 'udemy tutorial',
            'Access-Control-Allow-Origin': '*',
        },
        
    });

    // console.log(response);
    const data2 = await response2.json();

    result2.textContent = data2.joke;
};

mommaJoke(); // load joke when page is loaded...
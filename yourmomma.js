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



const mommaJoke = async () => {

    try {
        const response2 = await fetch('GET',momURL, {
            headers: { // think of header as info about our request
                Accept: 'application/json',
                // 'Content-Type': 'application/json',
                'User-Agent': 'Independent Developer',
                // 'Access-Control-Allow-Origin': '*',
            },
            // body : JSON.stringify(result2),
            
        });
    
        // console.log(response2);
        const data2 = await response2.json();
    
        result2.textContent = data2['joke'];
        // console.log(result2.textContent)
        
    } catch (error) {
        console.log(error)
    }

    
};

mommaJoke(); // load joke when page is loaded...
// console.log(result2)

// window.onload = ()=> mommaJoke();
// document.addEventListener('DOMContentLoaded', ()=> mommaJoke()); // load jokes on page loaded
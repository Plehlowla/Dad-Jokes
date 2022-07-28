// console.log('Dad Jokes Starter');

const url22 = 'https://api.yomomma.info/';

// https://api.yomomma.info/ 
// you momma jokes

const btn2 = document.querySelector('.btn2');
const result2 = document.querySelector('.result2');

// console.log(btn,result);

// window.onload = ()=> displayJoke();
// document.addEventListener('DOMContentLoaded', ()=> displayJoke()); // load jokes on page loaded

btn2.addEventListener('click', () => {
    displayJoke2();
    // const response = await fetch(url);
    // const data = await response.json()
    // displayJoke(data);
});


// let rebounce = false;
const displayJoke2 = async() => {
    result2.textContent = 'Loading...';
    // rebounce = true;
        // rebounce = true;
    try {
        const response = await fetch(url22, {
            headers: { // think of header as info about our request
                Accept: 'text/plain',
                // 'Content-Type': 'text/html',
                'User-Agent': 'Independent Developer',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
                
            },
            
        });

        if(!response.ok){
            throw new Error('there was an error');
        }
        
        const data = await response.json();
        result2.textContent = data.index;

    } catch (error) {
        console.log(error.message);
        result2.textContent = 'There was an error';
    }


    // rebounce = false;

    // console.log(response);

    // const displayText = jokes.map((dadJoke) => {
    //     const {joke} = dadJoke;
    //     return `<p class="result">${joke}</p>`
    // }).join('');

    // return result.innerHTML = displayText
};

displayJoke2(); // load joke when page is loaded...
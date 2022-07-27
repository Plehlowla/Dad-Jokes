// console.log('Dad Jokes Starter');

const url = 'https://icanhazdadjoke.com/';

// https://api.yomomma.info/ 
// you momma jokes

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

// console.log(btn,result);

// window.onload = ()=> displayJoke();
// document.addEventListener('DOMContentLoaded', ()=> displayJoke()); // load jokes on page loaded

btn.addEventListener('click', () => {

    displayJoke();




    // const response = await fetch(url);
    // const data = await response.json()

    // displayJoke(data);
});



const displayJoke = async() => {
    result.textContent = 'Loading...';

    try {
        const response = await fetch(url, {
            headers: { // think of header as info about our request
                Accept: 'application/json',
                'User-Agent': 'udemy tutorial',
            },
            
        });

        if(!response.ok){
            throw new Error('there was an error');
        }
        
        const data = await response.json();
        result.textContent = data.joke;

    } catch (error) {
        console.log(error.message);
        result.textContent = 'There was an error';
    }

    // console.log(response);


    // const displayText = jokes.map((dadJoke) => {
    //     const {joke} = dadJoke;
    //     return `<p class="result">${joke}</p>`
    // }).join('');

    // return result.innerHTML = displayText
};

displayJoke(); // load joke when page is loaded...
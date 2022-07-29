const yourMommaJoke = async () => {
    
    const response = await fetch('https://api.yomomma.info/', {
        method: "GET",
        headers: {
            Accept: 'application/json'
        },
        mode: 'cors',
    });

    const jsonYourMomma = await response.json();

    console.log(jsonYourMomma.joke);
}

yourMommaJoke()
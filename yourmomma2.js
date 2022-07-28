const url3 = 'https://api.yomomma.info/'

const btn2 = document.querySelector('.btn2')

btn.addEventListener('click', ()=> {
    fetch('GET',url3)
    .then((gettingURL) => {
        console.log(gettingURL);
        return gettingURL.json()
    })
    .then((data) => {
        console.log(data);
        displayItems(data);
    })
    .catch((err) => {
        console.log(err);
    });
});

const displayItems = (items) => {
    const displayData = items.map((item) => {
        const { joke } = item;
        return `<p>${joke}</p>`;
    }).join('');
    console.log(displayData)

    const result3 = document.querySelector('.result2');
    result3.textContent = displayData.joke;
    document.body.appendChild(result3);

}


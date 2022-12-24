
const block = document.querySelector('.topThree')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c599114a1emsh1142a01581c3d5ap1676dfjsndc89f719989b',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=3', options)
	.then(response => response.json())
	.then(response => {
        responseAPI = response.data.coins
        console.log(response.data.coins)
        for (const resp of response.data.coins) {
            const name = resp.name
            const img = resp.iconUrl
            const newDiv = document.createElement('div');
            newDiv.classList.add('priceDiv')
            const newP = document.createElement('p');
            const newImg = document.createElement('img');
            newImg.classList.add('miniIMG')
            const newSpan = document.createElement('span')
            const price = resp.price;

            newP.innerText = name;
            newImg.src = img;
            newSpan.innerText = price
    newDiv.appendChild(newP);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newSpan)

block.appendChild(newDiv);
        }
    })
	.catch(err => console.error(err));
    

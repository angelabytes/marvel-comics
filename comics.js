import SparkMD5 from "spark-md5";

export const getComics = async (element) => 
{
    const apikey = import.meta.env.VITE_PUBLIC_KEY;
    const privateKey = import.meta.env.VITE_PRIVATE_KEY;
    const baseURL = "http://gateway.marvel.com/v1/public/";
    const ts = Date.now();
    const hash = SparkMD5.hash(ts + privateKey + apikey);
    const comicsURL = `${baseURL}comics?ts=${ts}&apikey=${apikey}&hash=${hash}`;

    try 
    {
        const response = await fetch(comicsURL);
        if(!response.ok)
        {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }

        const data = await response.json();
        displayComicBooks(data.data.results, element);
    }
    catch(error)
    {
        console.error(`Error when fetching comics: ${error}`);
    }
    
};

const displayComicBooks = (comics, element) => 
{
    element.innerHTML = "";

    const comicsContainer = document.createElement('div');
    comicsContainer.id = 'comics';
    element.appendChild(comicsContainer);

    comics.forEach(comic => 
    {
        const priceInfo = comic.prices.length > 0 ? comic.prices[0] : {price: "N/A"};
        const comicPrice = priceInfo.price ? `$${priceInfo.price}`: "N/A";
        const comicUPC = comic.upc ? `${comic.upc}`: "N/A";
        comic.dates.forEach

        const comicElement = document.createElement('div');
        comicElement.classList.add('card');
        comicElement.innerHTML = 
        `
          <img src="${comic.thumbnail.path}/standard_xlarge.${comic.thumbnail.extension}" alt="comic_image"/> 
          <h3>${comic.title}</h3>
          <p class="price">Price: ${comicPrice}</p>
          <p class="upc"> UPC: ${comicUPC}</p>
          <p class="issue-num">Issue #${comic.issueNumber}</p>
        `;
        comicsContainer.appendChild(comicElement);
    });
};

getComics(document.querySelector('#comics'));
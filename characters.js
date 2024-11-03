import SparkMD5 from "spark-md5";

export const getCharacters = async (element) => 
{
    const apikey = import.meta.env.VITE_PUBLIC_KEY;
    const privateKey = import.meta.env.VITE_PRIVATE_KEY;
    const baseURL = "http://gateway.marvel.com/v1/public/";
    const ts = Date.now();
    const hash = SparkMD5.hash(ts + privateKey + apikey);
    const charactersURL = `${baseURL}characters?ts=${ts}&apikey=${apikey}&hash=${hash}`;

    try 
    {
        const response = await fetch(charactersURL);
        if(!response.ok)
        {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }

        const data = await response.json();
        displayCharacters(data.data.results, element);
    }
    catch(error)
    {
        console.error(`Error when fetching charaters: ${error}`);
    }
    
};


const displayCharacters = (characters, element) =>
{
    element.innerHTML="";
    const charactersContainer = document.createElement('div');
    charactersContainer.id = 'characters';
    element.appendChild(charactersContainer);

    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.classList.add('card');
        characterElement.innerHTML = `
            <img src="${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}" alt="character_image"/>
            <h3>${character.name}</h3>
        `;
        charactersContainer.appendChild(characterElement);
    });
};
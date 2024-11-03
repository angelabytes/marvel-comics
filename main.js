import './style.css'
import { getCharacters } from './characters.js'
import { getComics } from './comics.js';


document.querySelector('#app').innerHTML = 
`
  <div class="hero">
    <img src="Marvel_Comics_2024_logo.svg" id="logo" alt="marvel_comics_logo"/>
    <img src="venom-7059662_1280.png" id="hero-img" alt="spawn_hero_img" />
    <div class="hero-overlay"></div>
    <nav>
      <a href="#" class="nav-link" data-target="characters"><h2>Characters</h2></a>
      <a href="#" class="nav-link" data-target="comics"><h2>Comics</h2></a>
    </nav>
  </div>
  <main>
    <div class="background"></div>
    <div id="content"></div>
  </main>
`;


const navigate = (target) => {
  const contentElement = document.querySelector('#content');
  contentElement.innerHTML = "";

  if(target === 'characters')
  {
    getCharacters(contentElement);
  }
  else if(target === 'comics')
  {
    getComics(contentElement);
  }
};

document.querySelectorAll('.nav-link').forEach(link => 
{
  link.addEventListener('click', e => 
  {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('data-target');
    navigate(target);
  });
});

navigate('characters');
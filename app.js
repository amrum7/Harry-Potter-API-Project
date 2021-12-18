const urlAll = 'http://hp-api.herokuapp.com/api/characters/students'
const container = document.getElementById('container')
const all = document.getElementById('all');

// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data));




function getAll(){
fetch(urlAll)
.then(response => response.json())
.then(data => data.forEach(character => {
    if(character.house === 'Gryffindor' || character.house ===  'Hufflepuff' || character.house ===  'Ravenclaw' || character.house ===  'Slytherin'){
    if(character.image){
    container.innerHTML += `
    <div class="card ${character.house}">
    <img src="${character.image}" class="card-img" alt="${character.name}">
      <h2 class="card-text name name-${character.house}">${character.name}</p>
  </div>
    `
    } else if(character.image === '') {
        container.innerHTML += `
        <div class="card ${character.house}">
        <img src="${character.house}-logo.png" class="card-img" alt="${character.name}">
          <h2 class="card-text name name-${character.house}">${character.name}</p>
      </div>
        ` 
    } 
}}))
}

all.addEventListener('click', getAll);






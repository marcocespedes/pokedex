// API DOCS - https://pokeapi.co/
const promises = [];

for (let i = 1; i <= 151; i++) {
  const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  promises.push(
    fetch(url)
      .then(res => res.json())
  );
}

Promise.all(promises)
.then(results => {
  showCards(results);
});



function showCards(res) {
  const exist = document.querySelector('.content-cards')
  let cards = ''

  res.forEach( card => {
    const { name, sprites: {other: {"official-artwork": {front_default}}} } = card
    cards += `
      <div class="card">
        <img src="${front_default}" alt="" class="card-img">
        <p class="card-title">
          ${name}
        </p>
      </div>
    `
  })
  exist.innerHTML = cards
}
document.addEventListener('DOMContentLoaded', async () => {
  const pizzas = await fetchFromDb(`Pizzas`)
  console.log(pizzas)
  insertPizzasIntoDom(pizzas)
})

const DB = `http://localhost:3000/`

async function fetchFromDb (thing) {
  const thingResponse = await fetch(`${DB}${thing}`)
  const thingJson = await thingResponse.json()
  return thingJson
}


//  image
//  denumire
//  pret.normal
function insertPizzaIntoDom(pizza) {
  const container = document.querySelector(`.main-items`)

  const card = document.createElement(`div`)
  card.className = `item`

  const title =  document.createElement(`h2`)
  title.classList = `item-title`
  title.innerText = pizza.denumire

  const cardImage = document.createElement(`img`)
  cardImage.className = `item-img`
  cardImage.setAttribute(`src`, pizza.image)

  const price =  document.createElement(`span`)
  price.classList = `item-price`
  price.innerText = `${pizza.pret.normal} lei`

  const button = document.createElement(`button`)
  button.className = `item-add-btn`
  button.innerText = `Adauga in cos`
  
  card.appendChild(cardImage)
  card.appendChild(title)
  card.appendChild(price)
  card.appendChild(button)

  button.addEventListener(`click`, () => {
    addToCart(pizza)
  })
  
  container.appendChild(card)
}

function insertPizzasIntoDom (pizzas) {
  pizzas.map(pizza => insertPizzaIntoDom(pizza))
}

function addToCart (pizza) {
  const cart = document.querySelector(`.cart`)

  const cartItem = document.createElement(`div`)
  cartItem.innerText = `${pizza.denumire} || Pret: ${pizza.pret.normal}`
  
  cart.appendChild(cartItem)
}
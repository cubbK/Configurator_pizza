document.addEventListener('DOMContentLoaded', () => {
  fetchPizzas()
});

const DB = `http://localhost:3000`

async function fetchPizzas () {
  const pizzasResponse = await fetch(`${DB}/Pizzas`)
  const pizzas = await pizzasResponse.json()
  console.log(pizzas)
}
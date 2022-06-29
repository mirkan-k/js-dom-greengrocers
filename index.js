const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};


function setState() {
  renderStore()
}

function renderStore() {
  renderStoreItems()
}

function createItemIcon(item) {
  const div = document.createElement('div')
  div.classList.add('store--item-icon')
  
  const img = document.createElement('img')
  img.setAttribute('src', `./assets/icons/${item.id}.svg`)
  img.setAttribute('alt', item.name)
  div.appendChild(img)

  return div
}

function createItemButton() {
  const button = document.createElement('button')
  button.textContent = 'Add to cart'

  return button
}

function createStoreItem(item) {
  const li = document.createElement('li')

  const icon = createItemIcon(item)
  li.appendChild(icon)

  const button = createItemButton()
  li.appendChild(button)
  
  return li
}

function renderStoreItems() {
  state.items.forEach(item => {
    const storeItemList = document.querySelector('.store--item-list')

    const storeItemLI = createStoreItem(item)
    console.log(storeItemLI)

    storeItemList.append(storeItemLI)
  })
}

function createCartItem(item) {
  const li = document.createElement('li')
  const img = document.createElement('img')
  const p = document.createElement('p')
  const buttonRemove = document.createElement('button')
  const quantity = document.createElement('span')
  const buttonAdd = document.createElement('button')
}

function init() {
  setState()
}

function addListeners() {

}

function run() {
  init()
  addListeners()
}

run()
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


function setState(cartItem) {
  state.cart.push(cartItem)
}

function renderStore() {
  renderStoreItems()
}

// Creating & rendering store shelf items
function createItemIcon(item) {
  const div = document.createElement('div')
  div.classList.add('store--item-icon')
  
  const img = document.createElement('img')
  img.setAttribute('src', `./assets/icons/${item.id}.svg`)
  img.setAttribute('alt', item.name)
  div.appendChild(img)

  return div
}

function createItemButton(item) {
  const button = document.createElement('button')
  button.textContent = 'Add to cart'
  button.addEventListener('click', () => {
    addItemToCart(item)
  })

  return button
}

function createStoreItem(item) {
  const li = document.createElement('li')

  const icon = createItemIcon(item)
  li.appendChild(icon)

  const button = createItemButton(item)
  li.appendChild(button)
  
  return li
}

function renderStoreItems() {
  state.items.forEach(item => {
    const storeItemList = document.querySelector('.store--item-list')

    const storeItemLI = createStoreItem(item)
    // console.log(storeItemLI)

    storeItemList.append(storeItemLI)
  })
}

// Creating & rendering Cart items
function createCartIcon(item) {
  const img = document.createElement('img')
  img.classList.add('cart--item-icon')
  img.setAttribute('src', `./assets/icons/${item.id}.svg`)
  img.setAttribute('alt', item.name)

  return img
}

function createCartText(item) {
  const p = document.createElement('p')
  p.textContent = item.name
  // console.log(item)

  return p
}

function createCartDecrement(item) {
  const decrement = document.createElement('button')
  decrement.classList.add('quantity-btn', 'remove-btn', 'center')
  decrement.textContent = '-'
  decrement.addEventListener('click', () => {
    removeItemFromCart(item)
  })

  return decrement
}

function removeItemFromCart(item) {
  const itemIndex = getCartItemIndex(item)

  if (item.quantity <= 1) {
    state.cart.splice(itemIndex, 1)
  } else {
    item.quantity--
  }

  renderCartItem()
  updateTotalPrice()
}

function createCartIncrement(item) {
  const increment = document.createElement('button')
  increment.classList.add('quantity-btn', 'add-btn', 'center')
  increment.textContent = '+'
  increment.addEventListener('click', () => {
    addItemToCart(item)
  })

  return increment
}

function createCartQuantity(item) {
  const quantity = document.createElement('span')
  quantity.classList.add('quantity-text', 'center')
  quantity.textContent = item.quantity

  return quantity
}

function createCartItem(item) {
  const li = document.createElement('li')

  const img = createCartIcon(item)
  li.appendChild(img)

  const p = createCartText(item)
  li.appendChild(p)

  const decrement = createCartDecrement(item)
  li.appendChild(decrement)
  
  const quantity = createCartQuantity(item)
  li.appendChild(quantity)
  
  const increment = createCartIncrement(item)
  li.appendChild(increment)

  return li
}

// Event Functions
function clearCartList() {
  const cart = document.querySelector('.cart--item-list')
  cart.innerHTML = ''
}

function renderCartItem() {
  clearCartList()
  
  state.cart.forEach(item => {
    const cart = document.querySelector('.cart--item-list')
    const cartItemLI = createCartItem(item)
  
    cart.appendChild(cartItemLI)
  })
}

function getCartItemIndex(item) {
  const itemIndex = state.cart.findIndex((cartItem => cartItem.id === item.id))

  return itemIndex
}

function addItemToCart(item) {
  const itemIndex = getCartItemIndex(item)
  let quantity = 1

  if (state.cart.some(e => e.id === item.id)) {
    state.cart[itemIndex].quantity++
  } else {
    setState( 
      {
        ...item,
        quantity: quantity
      }
    )
  }
  
  console.log('cart', state.cart)
  renderCartItem()
  updateTotalPrice()
}

function updateTotalPrice() {
  const totalNumber = document.querySelector('.total-number')

  let totalPrice = 0

  for (let i = 0; i < state.cart.length; i++) {
    const item = state.cart[i];

    totalPrice += (item.quantity * item.price)
  }

  totalNumber.textContent = `£${totalPrice.toFixed(2)}`
  // console.log(totalPrice)
}

// INITIALIZE & RUN
function init() {
  renderStore()
  updateTotalPrice()
}

function run() {
  init()
}

run()
// console.log(state.cart)
class Library {
  constructor() {
    this.books = []
  }

  addBook(newBook) {
    this.books.push(newBook)
  }

  removeBook(titulo) {
    this.books = this.books.filter(book => book.titulo !== titulo)
  }

  getBook(title) {
    return this.books.find(book => book.titulo === titulo)
  }
}

class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
  }
}

let contador = 0
const library = new Library()

const addBook = document.querySelector('.add-book-btn')
const readButton = document.querySelector('.read-btn')
const bookCardContainer = document.querySelector('.book-card-container')

function bookCard(book) {
  const card = document.createElement('div')
  const titulo = document.createElement('p')
  const autor = document.createElement('p')
  const paginas = document.createElement('p')
  const lido = document.createElement('button')
  const remover = document.createElement('button')

  card.setAttribute('dataset', `${contador}`)
  card.classList.add('book-card')
  lido.classList.add('read-btn')
  lido.style.backgroundColor = 'green'
  remover.classList.add('remove-btn')

  titulo.textContent = `${book.title}`
  autor.textContent = `${book.author}`
  paginas.textContent = `${book.pages}`
  if (book.readStatus === true) {
    lido.textContent = 'read'
  } else {
    lido.style.backgroundColor = 'red'
    lido.textContent = 'unread'
  }
  remover.textContent = 'Delete'

  lido.addEventListener('click', () => {
    if (lido.textContent === 'read') {
      lido.style.backgroundColor = 'red'
      lido.textContent = 'unread'
    } else {
      lido.style.backgroundColor = 'green'
      lido.textContent = 'read'
    }
  })

  remover.addEventListener('click', function () {
    console.log(card.getAttribute('dataset'))
    library.removeBook(book.titulo)
    card.remove()
  })

  bookCardContainer.appendChild(card)
  card.appendChild(titulo)
  card.appendChild(autor)
  card.appendChild(paginas)
  card.appendChild(lido)
  card.appendChild(remover)

  contador = contador + 1
}

addBook.addEventListener('click', function (e) {
  e.preventDefault()
  const titulo = document.querySelector('#titulo').value
  const autor = document.querySelector('#autor').value
  const paginas = document.querySelector('#pages').value
  const lido = document.querySelector('#lido').checked
  const book = new Book(titulo, autor, paginas, lido)
  console.log(book.title)
  bookCard(book)
  library.addBook(book.title)
})

function Book(title, author, pages, readStatus) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
  function info() {
    return `${title} by ${author}, ${pages} pages, ${readStatus}`
  }
}

let myLibrary = []

const addBook = document.querySelector('.add-book-btn')
const readButton = document.querySelector('.read-btn')
const bookCardContainer = document.querySelector('.book-card-container')

function bookInfo() {
  const titulo = document.querySelector('#titulo').value
  const autor = document.querySelector('#autor').value
  const qtdPaginas = document.querySelector('#pages').value
  const lido = document.querySelector('#lido').checked

  return new Book(titulo, autor, qtdPaginas, lido)
}

let contador = 0

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
    delete myLibrary[card.getAttribute('dataset')]
    card.remove()
    console.log(myLibrary)
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
  const book = bookInfo()

  bookCard(book)
  myLibrary.push(book.title)

  console.log(book)
  console.log(myLibrary)
})

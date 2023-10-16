class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  info(){
    if (this.status === 'Currently Reading'.toLowerCase) {
      return `${this.title} by ${this.author}, ${this.pages} pages is currently being read`;
    }
    else if (this.status === 'Finished'.toLowerCase) {
      return `${this.title} by ${this.author}, ${this.pages} pages has been completed`;
    }

    else {
      return `${this.title} by ${this.author}, ${this.pages} pages has not been read`;
    }
  }

}

  const book = new Book('The Hobbit', 'J.R Tolkein', 285, 'Finished');
  const book2 = new Book('The Amazing Spiderman', 'Stan Lee', 200, 'Currently reading');
  const book3 = new Book('Great Escape', 'Charles Dickens', 295, 'Currently reading');
  const book4 = new Book('Oliver Tiwst', 'Charles Dickens', 150, 'Finished');

  let libraryContent = [];
  
  libraryContent.push(book);
  libraryContent.push(book2);
  libraryContent.push(book3);
  libraryContent.push(book4);

const contentBody = document.querySelector('.body');
const dialog = document.getElementById('add_dialog');
const addButton = document.querySelector('.add_icon');
const addBook = document.querySelector('.add-submit');
const closeDialog = document.querySelector('.close_btn');
const headerItems = document.querySelectorAll('.c-items');

dialog.style.display = 'none';

headerItems.forEach(items =>{

  if(items.firstChild.textContent ==='Library'){
    addBorder(items);
    updateContent(libraryContent)

  }
  
  items.addEventListener('click', ()=> {
    switch(items.firstChild.textContent){
      case 'Library':
        console.log('library');

        removeBorder();

        addBorder(items);
        updateContent(libraryContent);
        break;

      case 'Current Reading':
        console.log('current reading');
        removeBorder();

        addBorder(items);

        updateContent(libraryContent.filter(book => book.status === 'Currently reading'))
        break;
      
      case 'Completed':
        console.log('completed');
        

        removeBorder();

        addBorder(items);

        updateContent(libraryContent.filter(book => book.status === 'Finished'))
        break;

      default:
        break;
    }

    
  })
})



addButton.addEventListener('click', ()=>{
  dialog.style.visibility= 'visible';
  dialog.style.display='block';
  dialog.showModal(); 
});


closeDialog.addEventListener('click', ()=>{
  dialog.style.visibility= 'hidden';
  dialog.style.display = 'none';
  dialog.close();
})

addBook.addEventListener('click', getBookDetails);


function updateContent(content){

    const cardCheck = document.querySelectorAll('.card');
    if(cardCheck.length >0){
      cardCheck.forEach(card => {
        contentBody.removeChild(card);
      })
    }

    for(let x =0; x< content.length; x++){

      createCard(content[x], x);

  }
}



function getBookDetails(event){
  const checkedValue = document.querySelector("input[type='radio'][name='status']:checked");
  const pageCount = document.getElementById('pages');
  const bookTitle = document.getElementById('title');
  const authorName = document.getElementById('author');

  if(pageCount.value && authorName.value && bookTitle.value && checkedValue.value){
    let newBook = new Book(bookTitle.value,authorName.value,pageCount.value, checkedValue.value);
    console.log(newBook.info());

    const inList = libraryContent.some((book) => book.title === newBook.title && book.author === newBook.author);
    if(inList){
      console.log('Already in library');
    }

    else{
      libraryContent.push(newBook);
      createBook(newBook);
    }
    event.preventDefault();
  }

  else{
    console.log('Invalid Details Entered');
    console.log(checkedValue.value);
    event.preventDefault();
  }
  
}


function createBook(book){
  if(book){
    updateContent(libraryContent);

  }
}

function removeBook(position){
  libraryContent.splice(position,1);
  updateContent(libraryContent);
}

function createCard(bookDetails, x){
  let cardHeader = document.createElement('h2');
  let cardAuthor = document.createElement('p');
  let cardPage = document.createElement('p');
  let removeBtn = document.createElement('button');
  let continueBtn = document.createElement('button');
  let cardDiv = document.createElement('div');

  cardDiv.classList.add('card');

  
  cardHeader.classList.add('title')
  cardHeader.textContent = bookDetails.title;

  
  cardAuthor.textContent = bookDetails.author;

  
  cardPage.textContent = `${bookDetails.pages} pages`;
  cardPage.classList.add('page');

  let div = document.createElement('div');
  div.classList.add('extra-feat');

  removeBtn.textContent='remove';
  removeBtn.classList.add('extra-btn');
  removeBtn.onclick = function(event){
    
    removeBook(removeBtn.parentElement.parentElement.dataset.key);
  }
  continueBtn.textContent='Finished';
  continueBtn.classList.add('extra-btn');


  div.appendChild(removeBtn);
  div.appendChild(continueBtn);

  cardDiv.appendChild(cardHeader);
  cardDiv.appendChild(cardAuthor);
  cardDiv.appendChild(cardPage);
  cardDiv.appendChild(div);

  cardDiv.dataset.key =x;

  contentBody.appendChild(cardDiv);

}

function addBorder(item){
  if(item.classList.contains('active')){
    console.log('Already active');
  }

  else{
    item.classList.add('active');
  }
}

function removeBorder(){
  for(let i = 0; i < headerItems.length; i++){
    headerItems.forEach(item => {
      if(item.classList.contains('active')){
        item.classList.remove('active');

      }
    })
  }
}


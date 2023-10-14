function Book(title, author, pages, status){
    this.title =title
    this.author=author
    this.pages = pages
    this.status =status;

    function info(){
      if(status === 'Currently Reading'){
        return`${this.title} by ${this.author}, ${this.pages} pages is currently being read`;
      }
      else if(status ==='Finished'){ 
        return`${this.title} by ${this.author}, ${this.pages} pages has been completed`;
      }

      else{
        return`${this.title} by ${this.author}, ${this.pages} pages has not been read`;
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
const formDetails = document.getElementById('book_form');
const pageCount = document.getElementById('pages');
const bookTitle = document.getElementById('title');
const authorName = document.getElementById('author');



addButton.addEventListener('click', ()=>{
  dialog.showModal();
});


formDetails.addEventListener('submit', getBookDetails);

for(let x =0; x< libraryContent.length; x++){
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    let cardHeader = document.createElement('h2');
    cardHeader.classList.add('title')
    cardHeader.textContent = libraryContent[x].title;

    let cardAuthor = document.createElement('p');
    cardAuthor.textContent = libraryContent[x].author;

    let cardPage = document.createElement('p');
    cardPage.textContent = `${libraryContent[x].pages} pages`;
    cardPage.classList.add('page');

    cardDiv.appendChild(cardHeader);
    cardDiv.appendChild(cardAuthor);
    cardDiv.appendChild(cardPage);

    contentBody.appendChild(cardDiv);
}

function getBookDetails(event){
  const checkedValue = document.querySelector("input[type='radio'][name='status']:checked");

  if(pageCount.value && authorName.value && bookTitle.value && checkedValue.value){
    let createBook = new Book(bookTitle.value,authorName.value,pageCount.value, checkedValue.value);
    console.log(createBook.info);
    event.preventDefault();
  }

  else{
    console.log('Invalid Details Entered');
    console.log(checkedValue.value);
    event.preventDefault();
  }
  
}

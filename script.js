function Book(title, author, pages, status){
    this.title =title
    this.author=author
    this.pages = pages
    this.status =status;

    function info(){
      if(status === 'Currently Reading'){
        return`${this.title} by ${this.author}, ${pages} pages is currently being read`;
      }
      else if(status ==='Finished'){ 
        return`${this.title} by ${this.author}, ${pages} pages has been completed`;
      }

      else{
        return`${this.title} by ${this.author}, ${pages} pages has not been read`;
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

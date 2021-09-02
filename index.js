const book = ()=>{
    const searchBook = document.getElementById('main-book');
    const searchResult= searchBook.value;
    searchBook.value='';
    fetch(`http://openlibrary.org/search.json?q=javascript=${searchResult}`)
    
    .then(res=>res.json())
    .then(data=>showBook(data.docs))

}

const showBook = docs=>{
    const showBookArchive = document.getElementById('2nd-book')

    docs.forEach(doc=>{
        console.log(doc)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML=`
        <div class="card h-100">
        
            <div class="card-body">
            
            <h4 class="card-booktitle">${doc.title}</h4>
            <h6 class="card-author">${doc.author_name}</h6>
            <p class="card-publisher">${doc.publisher.slice(0,3)}</p>
              <p class="card-firstPublish">${doc.first_publish_year}</p>
               
              
            </div>
          </div>
        `
        showBookArchive.appendChild(div);
    })
}

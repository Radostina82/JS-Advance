function solve(){
   document.getElementsByClassName('btn create')[0].addEventListener('click', createPost);

   const posts = document.querySelector('main section');
   const creator = document.querySelector('#creator');
   const title = document.querySelector('#title');
   const category = document.querySelector('#category');
   const content = document.querySelector('#content');
   const archive = document.querySelector('.archive-section ol');

   function createPost(ev){
      ev.preventDefault();

      const articleElement = document.createElement('article');
      const h1Element = document.createElement('h1');
      h1Element.textContent = title.value;
      articleElement.appendChild(h1Element);

      const pCategory = document.createElement('p');
      pCategory.textContent = 'Category: ';
      const strongPCategory = document.createElement('strong');
      strongPCategory.textContent = category.value;
      pCategory.appendChild(strongPCategory);
      articleElement.appendChild(pCategory);

      const pCreator = document.createElement('p');
      pCreator.textContent = 'Creator: ';
      const strongPCreator = document.createElement('strong');
      strongPCreator.textContent = creator.value;
      pCreator.appendChild(strongPCreator);
      articleElement.appendChild(pCreator);

      const pPost = document.createElement('p');
      pPost.textContent = content.value;
      articleElement.appendChild(pPost);

      const divElement = document.createElement('div');
      divElement.setAttribute('class', 'buttons');
      const btnDelete = document.createElement('button');
      btnDelete.setAttribute('class', 'btn delete');
      btnDelete.textContent = 'Delete';
      divElement.appendChild(btnDelete);

      const btnArchive = document.createElement('button');
      btnArchive.setAttribute('class', 'btn archive');
      btnArchive.textContent = 'Archive';
      divElement.appendChild(btnArchive);
      articleElement.appendChild(divElement);
      posts.appendChild(articleElement);
       
      creator.value = '';
      title.value = '';
      category.value = '';
      content.value = '';

      btnArchive.addEventListener('click', (ev)=>{
         ev.preventDefault();

         const titlePost = h1Element.textContent;
         ev.target.remove();
         articleElement.remove();
         
         const liElement = document.createElement('li');
         liElement.textContent = titlePost;
         archive.appendChild(liElement);
        
         const allLiElements =Array.from(document.getElementsByTagName('li'));
         allLiElements.sort((e1,e2)=> e1.textContent.localeCompare(e2.textContent)); 
         
         while(archive.firstChild){
            archive.firstChild.remove();
         }

         allLiElements.forEach(e=> archive.appendChild(e));


      })

      btnDelete.addEventListener('click', (ev)=>{
         ev.preventDefault();
         articleElement.remove();
      })
   }
  }



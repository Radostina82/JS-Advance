window.addEventListener('load', solve);

function solve() {
    const genreElement = document.getElementById('genre');
    const nameElement = document.getElementById('name');
    const authorElement = document.getElementById('author');
    const dateElement = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');

    const saveContainer = document.getElementsByClassName('saved-container')[0];

    const allThisContainerElement = document.getElementsByClassName('all-hits-container')[0];

    addBtn.addEventListener('click', onAdd);

    function onAdd(ev){
        ev.preventDefault();

        if(genreElement.value == '' || nameElement.value == '' || authorElement.value == ''
        || dateElement.value == '' ){
            return;
        }

        const divInfo = document.createElement('div');
        divInfo.setAttribute('class', 'hits-info');
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', './static/img/img.png');

        const h2Genre = document.createElement('h2');
        h2Genre.textContent = `Genre: ${genreElement.value.trim().replace(/\s/gm,"")}`;
        const h2Name = document.createElement('h2');
        h2Name.textContent = `Name: ${nameElement.value.trim().replace(/\s/gm,"")}`;
        const h2Author = document.createElement('h2');
        h2Author.textContent = `Author: ${authorElement.value.trim().replace(/\s/gm,"")}`;
        const h3Date = document.createElement('h3');
        h3Date.textContent = `Date: ${dateElement.value.trim().replace(/\s/gm,"")}`;
        
        const saveBtn = document.createElement('button');
        saveBtn.setAttribute('class', 'save-btn');
        saveBtn.textContent = 'Save song';
        
        const likeBtn = document.createElement('button');
        likeBtn.setAttribute('class', 'like-btn');
        likeBtn.textContent = 'Like song';


        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'delete-btn');
        deleteBtn.textContent = 'Delete';

        divInfo.appendChild(imgEl);
        divInfo.appendChild(h2Genre);
        divInfo.appendChild(h2Name);
        divInfo.appendChild(h2Author);
        divInfo.appendChild(h3Date);
        divInfo.appendChild(saveBtn);
        divInfo.appendChild(likeBtn);
        divInfo.appendChild(deleteBtn);

        allThisContainerElement.appendChild(divInfo);

        genreElement.value = '';
        nameElement.value = '';
        authorElement.value = '';
        dateElement.value = '';

        likeBtn.addEventListener('click', (e)=>{
            e.preventDefault();

            const divLikes = document.getElementsByClassName('likes')[0].children[0];
            let totalLikes = 0;
            totalLikes += 1;
            document.getElementsByClassName('likes')[0].children[0].textContent = `Total Likes: ${totalLikes}`;
            likeBtn.disabled = true;
            const img = document.createElement('img');
           
            img.setAttribute('src', './static/img/img.png ', 'alt', 'image-like');
            
        });

        saveBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            
            const divCurrent = e.target.parentElement;
            allThisContainerElement.removeChild(divCurrent);
            saveContainer.appendChild(divCurrent);
            e.target.remove();
            likeBtn.remove();
        });

        deleteBtn.addEventListener('click', (e)=>{
            e.preventDefault();

            const deleteDiv = e.target.parentElement;
            saveContainer.removeChild(deleteDiv);

        });
    }
}
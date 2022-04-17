function solve() {
    const [name, hall, ticket] = document.getElementById('container').children;
    const addMovieButton = document.querySelector('#container button');
    addMovieButton.addEventListener('click', addMovie);
    const clearBtn = document.querySelector('#archive button');    
    function addMovie(ev){
        ev.preventDefault();
        if(name.value != '' && hall.value != '' && !isNaN(Number(ticket.value)) && ticket.value != ''){
            //const movie = document.querySelector('#movies ul');
            const movie = document.getElementById('movies').children[1];
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent= name.value;
            li.appendChild(span);
            const strong = document.createElement('strong');
            strong.textContent = `Hall: ${hall.value}`;
            li.appendChild(strong);
            
            const div = document.createElement('div');
            const strong2 = document.createElement('strong');
            strong2.textContent = Number(ticket.value).toFixed(2);
            div.appendChild(strong2);

            const input = document.createElement('input');
            input.setAttribute('placeholder', 'TicketsSold');
            div.appendChild(input);

            const button = document.createElement('button');
            button.textContent = 'Arhive';
           // button.setAttribute('onclick', 'addToArhive');
            div.appendChild(button);
            li.appendChild(div);    
            movie.appendChild(li);
           
            name.value = '';
            hall.value = '';
            ticket.value = '';
        }
            document.querySelector('#movies button').addEventListener('click', onArchive);

            function onArchive(ev){
               const parent = ev.currentTarget.parentElement;
               const input = parent.children[1];
                if(!isNaN(Number(input.value))&& Number(input.value)>=0){
                    const arhive = document.querySelector('#archive ul');

                    const liArh = document.createElement('li');

                    const spanArh = document.createElement('span');
                     spanArh.textContent= span.textContent;
                     liArh.appendChild(span);

                    const strongArh = document.createElement('strong');
                    strongArh.textContent = `Total amount: ${(Number(strong2.textContent) * Number(input.value)).toFixed(2)}`;
                    liArh.appendChild(strongArh);

                    const buttonDelete= document.createElement('button');
                    buttonDelete.textContent= 'Delete';
                     liArh.appendChild(buttonDelete);

                    arhive.appendChild(liArh);

            ev.currentTarget.parentElement.parentElement.remove();
                }
            buttonDelete.addEventListener('click', onDelete);

            function onDelete(ev){
                ev.currentTarget.parentElement.remove();
            }
            
                clearBtn.addEventListener('click', onClear);

                function onClear(ev){
                    const clear = ev.currentTarget.parentElement.children[1].children;
                    while(clear!=0){
                        clear.pop;
                    }
                }
                }
            }

        }
        
    
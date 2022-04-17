function lockedProfile() {
    //document.getElementById('main').addEventListener('click', onClick);
    Array.from(document.querySelectorAll('.profile button')).
    forEach(b=>b.addEventListener('click', onClick));

    function onClick(ev){
        const profile = ev.target.parentElement;
        const isActive = profile.querySelector
        ('input[type = "radio"][value = "unlock"]').checked;
       if(isActive){
       // const infoDiv = Array.from(profile.querySelectorAll('div')).
        //find(d=>d.id.includes('HiddenFields'));
        const infoDiv = profile.querySelector('div');
        if(ev.target.textContent == 'Show more'){
            infoDiv.style.display = 'block';
            ev.target.textContent = 'Hide it';
        }else{
            infoDiv.style.display = '';
            ev.target.textContent = 'Show more';
        }
    }
    }
}
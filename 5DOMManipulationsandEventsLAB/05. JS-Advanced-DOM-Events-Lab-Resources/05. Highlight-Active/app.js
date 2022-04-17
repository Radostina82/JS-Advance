function focused() {
   const input =  Array.from(document.getElementsByTagName('input'));

   for(const field of input){
       field.addEventListener('focus', onFocus);
       field.addEventListener('blur', onBlurred);
   }

   function onFocus(ev){
       ev.target.parentNode.className = 'focused';
   }

   function onBlurred(ev){
    ev.target.parentNode.className = '';
}
}
function addAndRemove(command) {
    let arr = [];

    for (let i = 0; i < command.length; i++) {
        if (command[i] == 'add') {
            arr.push(i+1);
        } else if (command[i] == 'remove') {
            arr.pop();
        }
    }
   if(arr.length == 0){
       console.log('Empty');
   }else{
       for(let element of arr){
           console.log(element);
       }
   }
}

addAndRemove(['add', 
'add', 
'remove', 
'add', 
'add']

);
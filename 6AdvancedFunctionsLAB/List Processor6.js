function list(input){
    let result = [];
    let output = '';
    for(let item of input){
        
        let [command, str] = item.split(' ');

        if(command == 'add'){
            result.push(str);
        }else if(command == 'remove'){
            let remove = result.indexOf(str);
            result.splice(remove,1);
            
        }else if(command == 'print'){
            console.log( `${result.join(',')}`);
           
        }
      
    }
   /* function add(string){
   return output+=string;
    }
    function remove(string){
        let remove = result.indexOf(string);
        result.splice(remove,1);
       return result;
    }

    function print(){
       
    }*/
  
}
list(['add hello', 'add again', 'remove hello', 'add again', 'print'])

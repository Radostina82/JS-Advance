function createSortedList(){
const result = {
    el: el = [],
    add(elemenent){
        this.el.push(elemenent);
        this.el.sort((a,b) => a-b);
        this.size++;
    },
    remove(index){
        if(index>=0 && index< this.el.length){
            this.size--;
           return this.el.splice(index,1); 
        };
    },
    get(index){
        if(index>=0 && index< this.el.length){
           return this.el[index];
        };
    },
    size: size = 0
};
return result;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

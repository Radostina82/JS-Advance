function cars(arr){
    const generalObj = {};

    let constructor = (function (){
        return{
            create: (name) => generalObj[name] = {},
            inherit: (name, parentName) => generalObj[name] = Object.create(generalObj[parentName]),
            set: (name, key, val) => generalObj[name][key] = val,
            print: (name) => {
                let list = [];
                for(let key in generalObj[name]){
                    list.push(key +':' + generalObj[name][key]);
                }
                console.log(list.join(', '))
            }
        }
    })();
    
    for (let com of arr) {
        if (com.includes('inherit')) {
            let [act1, name, act2, parentName] = com.split(' ');
            constructor['inherit'] (name, parentName);
        } else if (com.includes('create') || com.includes('print')){
            let [act, name] = com.split(' ');
            constructor[act] (name)
        } else if (com.includes('set')) {
            let [act, name, key, value] = com.split(' ');
            constructor[act] (name, key, value);
        }
    }
}
cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);
function words(str){
    let result = str.toUpperCase().match(/\w+/g).join(', ');
    console.log(result);
}

words('Hi, how are you?');
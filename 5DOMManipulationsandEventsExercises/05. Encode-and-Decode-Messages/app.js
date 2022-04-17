function encodeAndDecodeMessages() {
    let encodeBtn = document.querySelectorAll('button')[0];
    let dencodeBtn = document.querySelectorAll('button')[1];
    let messageInput = document.querySelectorAll('textarea')[0];
    let messageOutput = document.querySelectorAll('textarea')[1];

    encodeBtn.addEventListener('click', encodeMessages);
    dencodeBtn.addEventListener('click', decodeMessages);

    function encodeMessages(ev){
        let text = messageInput.value;
        let encodeText = '';

        for(let i = 0; i < text.length; i++){
            encodeText += String.fromCharCode(text.charCodeAt(i) +1);
        }
        messageInput.value = '';
        messageOutput.value = encodeText;
    }

    function decodeMessages(ev){
        let text = messageOutput.value;
        let dencodeText = '';
        for(let i = 0; i < text.length; i++){
            dencodeText += String.fromCharCode(text.charCodeAt(i) -1);
        }
        messageOutput.value = dencodeText;
    }
}

/*let a = 'Tina';
let output = '';
for(let i = 0; i< a.length; i++){
console.log(String.fromCharCode(a.charCodeAt(i) +1));
}*/
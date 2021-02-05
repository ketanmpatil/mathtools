var key = document.getElementById('key');
var copybtn = document.getElementById('Copybtn');

copybtn.onclick = function () {
    key.select();
    document.execCommand("copy");
    alert("Copied");
}

 
 function makeid(length){
     var result = '';
     var characters = 'abcdefghijklmnopqrstuvwxyz0123456789!#$%&\()*+,-./:;<=>?@[\\]^_`{|}~';
     var charactersLength = characters.length;
     for (var i = 0; i < length ; i++){
         result += characters.charAt(Math.floor(Math.random()*charactersLength));
     }
     document.getElementById('key').value = result
 }


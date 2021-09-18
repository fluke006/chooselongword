var userText = prompt('Matn yozing').split(' ');

// userText first word
var word = userText[0];

for (var longWord of userText) {

   if(word < longWord){

      word = longWord
   }
   
}

alert(word);
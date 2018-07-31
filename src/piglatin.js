export function PigLatin(word) {
  this.word = word;
}
var vowelOptions = ['a','e','i','o','u'];
  // var consonantCount = [];

PigLatin.prototype.translate = function() {
  //creates array
  var letters = this.word.split("");
  var firstVowelPosition = 0;
  //collects vowel status of first letter
  var startVowel = vowelOptions.indexOf(letters[0]);
  //if a consonant
  if (startVowel === -1){
    //please add logic to determine
    for (var i = 0; i < letters.length; i++) {
      if (vowelOptions.indexOf(letters[i]) != -1) {
        firstVowelPosition = i;
        break;
      }
    }
    var finalResult = this.word.slice(firstVowelPosition, this.word.length) + this.word.slice(0, firstVowelPosition);
    return finalResult + "ay";
    //else if a vowel
  } else {
    return this.word + "way";
  }

};
//
//
// var vowelOptions = ['a','e','i','o','u'];
  // var consonantCount = [];
//
// var pigLatin = function(input) {
//   //creates array
//   var letters = input.split("");
//   var firstVowelPosition = 0;
//   //collects vowel status of first letter
//   var startVowel = vowelOptions.indexOf(letters[0]);
//   //if a consonant
//   if (startVowel === -1){
//     //please add logic to determine
//     for (i = 0; i < letters.length; i++) {
//       if (vowelOptions.indexOf(letters[i]) != -1) {
//         firstVowelPosition = i;
//         break;
//       }
//     }
//     var finalResult = input.slice(firstVowelPosition, input.length) + input.slice(0, firstVowelPosition);
//     return finalResult + "ay";
//     //else if a vowel
//   } else {
//     return input + "way";
//   }
// }

//
// $(function(){
//   $("form#pig-latin").submit(function(event){
//     event.preventDefault();
//     var english = $("input#english").val();
//     $("#result").text(pigLatin(english));
//   })
// });



// if (first letter is vowel) {
//   result + "way"
// } else if (first letter is consonant) {
// cycle through and add
// until vowel
// if vowel
// break;
//}

//   });
//
// });

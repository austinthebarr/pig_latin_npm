import { PigLatin } from './../src/piglatin.js';
describe('PigLatin', function(){

  it('should take input', function(){
    var input = new PigLatin("hello");
    expect(input.word).toEqual("hello");
  });

  it('should drop the first position of the word and add it to the end of the word with "ay"', function(){
    var word = new PigLatin("hello");
    expect(word.translate()).toEqual("ellohay");
  });

  it('should add "way" to the end of the word if the word start with vowel', function(){
    var word = new PigLatin("egg");
    expect(word.translate()).toEqual('eggway');
  });
});
  

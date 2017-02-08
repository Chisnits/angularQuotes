angular.module('quotes').service('mainService', function(){

var data = 
    [
        { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
        { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
        { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
        { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
        { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
        { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
        { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
    ]; 

    this.getQuotes = function(){
        return data;
    }

    this.addData = function(newQuote){
        if (newQuote.text && newQuote.author){
            data.push(newQuote);
            return true;
        } 
            return false;
    }
    JSON.stringify(data)
    localStorage.setItem('storedQuotes','JSON.stringify(data)');
    console.log(JSON.stringify('storedQuotes','JSON.stringify(data)'));
    var storedItems = localStorage.getItem('storedQuotes')
    console.log(storedItems)

         this.removeData = function(textToRemove){
        for (var i=0;i<data.length;i++){
            if (data[i].text.toLowerCase() === textToRemove.toLowerCase()){
                data.splice(i--,1);
            }
        }
    };


});
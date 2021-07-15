const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

      for(const element in collection){
        callback(collection[element])
      }
      return collection; 
    },

    map: function(collection, callback) {
      let array = []
      for(const element in collection){
        array.push(callback(collection[element]))
      }
      return array; 

    },

    reduce: function(collection, callback, acc) {
      let i = 0;
      if(acc === undefined){
        acc = collection[0];
        i = 1; 
      }
      let num = acc;
      for(i; i < collection.length; i++){
        num += callback(0, collection[i], collection)
      }
      return num; 
    },

    find: function(collection, predicate){
      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          return collection[i]; 
        }
      }
    },

    filter: function(collection, predicate){
      let array = []
      for(const element in collection){
        if(predicate(collection[element])){
          array.push(collection[element]); 
        }
      }
      return array; 
    },

    size: function(collection){
      let num = 0;
      for(const element in collection){
        num += 1; 
      } 
      return num; 
    },

    first: function(array, n = 0){ 
      if(n === 0){
        return array[0]
      }
      else{
        let newArray = []
        while(n > 0){
          newArray.unshift(array[n-1]);
          n--;
        }
        return newArray; 
      }
    },

    last: function(array, n = 0){
      if(n === 0){
        return array[array.length-1]
      }
      else{
        let newArray = [];
        while(n > 0){
          newArray.push(array[array.length-n])
          n--;
        }
        return newArray; 
      }
    },

    compact: function(array){
      let newArray = []
      for(let i = 0; i < array.length; i++){
        if(array[i]){
          newArray.push(array[i])
        }
      }
      return newArray; 
    },

    sortBy: function(array, callback){
      let newArray = [...array]; 
      for(const element in newArray){
        callback(element); 
      }
      return newArray.sort(); 
    },
    

    functions: function() {

    },


  }
})()

fi.libraryMethod()

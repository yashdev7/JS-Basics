const myJson = `{
    
        "name": "Yash",
        "score": 11.75,
        "isAdmin": false,
        "license": null,
        "shopItem": ["food","clothes","sunflower oil"],
    
        "myObj": {
            "name": "Rock",
            "marks": 45,
            "shopItem2": ["Apple", "Orange",{"a": true}]
        }
    
}`;
     
const parsed = JSON.parse(myJson);

console.log(parsed);

console.log(parsed["shopItem"]);

console.log(parsed["shopItem2"]);  // this will show undefined
console.log(parsed["myObj"]["shopItem2"]); // this will give the data inside it

console.log(parsed["myObj"]["shopItem2"]["a"]); // this will show undefined
console.log(parsed["myObj"]["shopItem2"][2]["a"]); // this will give the value of a is true
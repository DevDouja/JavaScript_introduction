/**
 * Array.prototype.entries() 
 * This method is a custom javascript method that helps to get a new
 * array, which returns a new array iterator as key|value pairs.
 */
let countries = ["Nigeria", "Spain", "France", "Brazil"];
let index = countries.entries();

for(country of index){

    console.log("country", country);
    
}
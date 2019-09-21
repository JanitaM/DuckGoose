
/* Step 1: Create an array of 100 numbers, starting with 1 ending with 100
This creates an array from 0 thru 100. Slice(1) removes the first index which is 0 so you get 1 thru 100.
Source: https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp */
let arrayOfNum = [...Array(101).keys()].slice(1);

let button = document.getElementById("start-btn");
// When I click the button
button.addEventListener("click", () => {
  //  duckGoose excutes (loops through an array and assigns values) and returns o;
  let o = [];

  function duckGoose(array) {
    for (num of array) {
      if (num % 5 === 0 && num % 3 === 0) {
        o.push("DuckGoose");
      } else if (num % 5 === 0) {
        o.push("Goose");
      } else if (num % 3 === 0) {
        o.push("Duck");
      } else {
        o.push(num);
      }
    };
  }

  duckGoose(arrayOfNum);

  // write functions prints to HTML
  function write(o) {
    var el = document.createElement('pre');
    el.innerHTML = JSON.stringify(o, undefined, 2);
    document.body.appendChild(el);
  }

  write(o);

  //   end of program
});
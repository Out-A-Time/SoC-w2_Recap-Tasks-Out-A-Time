const celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson",
];

let legendaryCelebs = [];
let vowelCelebs = [];
// Using RegularExpression test()
function makeLegend(name) {
  let charSet = /[aeiou]/;

  for (let i = 0; i < celebs.length; i++) {
    legendaryCelebs.push(`${name[i]} is now a legend.`);
    console.log(legendaryCelebs[i]);
  }
  for (let i = 0; i < celebs.length; i++) {
    let celebInitial = celebs[i].toLowerCase().charAt(0);
    if (charSet.test(celebInitial) === true) {
      console.log("first letter: " + celebs[i].toLowerCase().charAt(0));
      vowelCelebs.push(name[i]);
    }
  }
  console.log("Vowel array: " + vowelCelebs);
}
makeLegend(celebs);

//using charAt(0) method and comparing first letter of the name
//with vowels AEIOU. Notice that you have to compare celebInitial
//with each vovel separately when using OR ||
// function makeLegend(name) {
//   for (let i = 0; i < celebs.length; i++) {
//     legendaryCelebs.push(`${name[i]} is now a legend.`);
//     console.log(legendaryCelebs[i]);
//   }
//   for (let i = 0; i < celebs.length; i++) {
//     let celebInitial = celebs[i].toLowerCase().charAt(0);
//     if (
//       celebInitial === "a" ||
//       celebInitial === "e" ||
//       celebInitial === "i" ||
//       celebInitial === "o" ||
//       celebInitial === "u"
//     ) {
//       vowelCelebs.push(name[i]);
//     }
//   }
//   console.log("Vowel array: " + vowelCelebs);
// }
// makeLegend(celebs);

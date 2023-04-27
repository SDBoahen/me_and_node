console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Christine",
    hometown: "Queens 🙅🏾‍♂️",
    favoriteColors: ["gold", "navy blue", "forest green", "red"]
}


function introduceMe (personObj){
    // if(personObj === name){
    console.log(`Hi, my name is ${personObj.name}, and I'm from ${personObj.hometown}`)
    console.log(`My favorite colors are ${personObj.favoriteColors}`)
    }
    // print out: "Hi, my name is {your name}, and I'm from {your hometown}"

    // print out: "My favorite colors are {your favorite colors}"



console.log(introduceMe(meObj));

// introduceMe();
// const personObj = process.argv[2];
// const result = introduceMe(personObj);
// console.log(result)

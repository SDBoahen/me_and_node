console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Chris",
    hometown: "Astoria - Queens 🍕🏞️",
    favoriteColors: ["pigeon blue", "onyx black", "forest green", "scarlet red"]
}


function introduceMe (personObj){
    console.log(`Hi, my name is ${personObj.name}, and I'm from ${personObj.hometown}`);
    console.log(`My favorite colors are ${personObj.favoriteColors.join(", ")}`);
}

introduceMe(meObj)
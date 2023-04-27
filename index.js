console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Daniel",
    hometown: "Port-au-Prince 🇭🇹",
    favoriteColors: [" black", " blue"," red"]
}


function introduceMe (personObj){
    // print out: "Hi, my name is {your name}, and I'm from {your hometown}"
let introStatement = `Hi, my name is ${personObj.name}, and I'm from ${personObj.hometown}.`
    // print out: "My favorite colors are {your favorite colors}"
    let favoriteColorsStatement = `My favorite colors are ${personObj.favoriteColors}.`
    console.log(introStatement);
    console.log(favoriteColorsStatement);
}
console.log(introduceMe(meObj))
console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Iris",
    hometown: "the DMV",
    favoriteColors: ["yellow", "blue", "lavender"]
}


function introduceMe (personObj){
    return `Hi, my name is ${personObj.name}, and I'm from ${personObj.hometown} \n My favorite colors are ${personObj.favoriteColors.join(" and ")}`;
}

console.log(introduceMe(meObj));
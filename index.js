console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    name: "Alex",
    hometown: "the Bronx!",
    favoriteColors: ["pink", "lavender", "olive green", "grey"]
};

function introduceMe(meObj){
    console.log(`Hi, my name is ${meObj.name}, and I'm from ${meObj.hometown}`);

    console.log(`My favorite colors are ${meObj.favoriteColors[0]}, ${meObj.favoriteColors[1]}, ${meObj.favoriteColors[2]}, and ${meObj.favoriteColors[3]}.`);
};

introduceMe(meObj);

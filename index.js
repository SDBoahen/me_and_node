console.log("Hey you! Yeah you! Awesome Developer! You're doing Great Fam! 💪🧑‍💻🙌")



const meObj = {
    myName: "Londa",
    hometown: "BedStuy, Brooklyn",
    favoriteColors: ["coral", "salmon", "red-orange"]
}


function introduceMe (personObj){
    // print out: "Hi, my name is {your name}, and I'm from {your hometown}"

    console.log(`Hi, my name is ${personObj.myName}, and I'm from ${personObj.hometown}`);
    // print out: "My favorite colors are {your favorite colors}"
}
    introduceMe("meObj");
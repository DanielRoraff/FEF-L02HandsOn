let idealCar = {
    name: "mustang",
    color: "red",
    weightInPounds: 3600,
    myCar: function () {
        console.log("My ideal car is a " + this.name + " with a color of " + this.color + ", but I do not want it to be over " + this.weightInPounds + " pounds.");
    }
};
idealCar.myCar();

// let idealCar = {
//     name: "mustang",
//     color: "red",
//     weightInPounds: 3600,
//     myCar: function () { __this is just another property?_Are lines 15-17 called an object Method?__
//         return "My ideal car is a " + this.name + " with a color of " + this.color + ", but I do not want it to be over " + this.weightInPounds + " pounds.";
//     }
// }; <-- __is that ';' necessary? doesn't seem to make a difference at this point__
// console.log(myCar); __I cannot call this(myCar) because it is a property and not a variable?__
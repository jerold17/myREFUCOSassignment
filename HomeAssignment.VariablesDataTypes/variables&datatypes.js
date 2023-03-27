//Calorie tracking app

//Cycling for 30mins burns 225cal.
//Sam decides to do cycling 30 minutes every day for 15 days

let calorriesperhalfhour = 225;
let numTimeSamCycling = 15;
let totalofcaloriesburn = calorriesperhalfhour * numTimeSamCycling;

console.log(
  `great work, Sam! After 0.5 hours of cycling every day for a week, you lose a total of ${totalofcaloriesburn} calories.`
);

//Saving app

//Suppose that Sam wants to save 10,000
//And has already save 7,500

let goal = 10000;
let savemoney = 7500;
let persentage = 100;
let persentageleft = (1 - savemoney / goal) * persentage;

console.log(
  `Thank you for your discipline and hard work, Sam! You are now ${persentageleft}% away from your goal of saving ₱10,000.`
);

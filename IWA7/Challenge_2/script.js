const nickname = "Timmy";
const firstname = "Timothy";

if (!nickname && !firstname) {
  console.log("Good morning!");
} else if (nickname != "") {
  console.log(`Good Morning, ${nickname}!`);
} else {
  console.log(`Good Morning, ${firstname}!`);
}
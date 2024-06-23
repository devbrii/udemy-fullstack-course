function whoWillBUy() {
  var names = ["Kurt", "Brian", "Daine", "Becina", "Punzalan"];
  var randomizer = Math.floor(Math.random() * names.length);
  return names[randomizer];
}

console.log(whoWillBUy());

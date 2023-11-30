// our phone regex:
const regex = /^(\+972|05\d{1}-?\d{7})|(\+972|0[23489]-?\d{7})$/;

//test array:
const phoneNumbers = ["08-2632213", "050-5632213"];

//loop over all phoneNumbers:
phoneNumbers.forEach((p) => {
  const match = regex.exec(p);

  if (match) {
    console.log(match);
  }
});

const findTheOldest = (array) => {
  return array.reduce((personA, personB) => {
    if (!("yearOfDeath" in personA)) personA.yearOfDeath = new Date().getFullYear();
    if (!("yearOfDeath" in personB)) personB.yearOfDeath = new Date().getFullYear();

    if (personB.yearOfDeath - personB.yearOfBirth > personA.yearOfDeath - personA.yearOfBirth){
      return personB;
    } else {
      return personA;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;

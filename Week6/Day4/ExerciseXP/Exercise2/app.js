import { people } from './data.js';

function calculateAverageAge(personArray) {
  const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / personArray.length;
  console.log(`Average Age: ${average.toFixed(2)}`);
}

calculateAverageAge(people);

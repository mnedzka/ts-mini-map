import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([100, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const characterCollection = new CharactersCollection('awrgargeaaXfwef');
const sorter = new Sorter(characterCollection);
console.log(characterCollection.data);

import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([100, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const characterCollection = new CharacterCollection('awrgargeaaXfwef');
// const sorter = new Sorter(characterCollection);
// console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(2);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();

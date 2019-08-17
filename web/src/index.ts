import { User } from './models/User';

const user = new User({});

user.set({ name: 'Deep', age: 99 });

console.log(user.get('name'));
console.log(user.get('age'));

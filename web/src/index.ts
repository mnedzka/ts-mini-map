import { User } from './models/User';

const user = new User({ name: 'aaa', age: 9999 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('user was changed');
});

user.set({ name: 'lalalalla' });

import { User } from './models/User';

const user = new User({});

user.on('change', () => {
  console.log('change no 1');
});
user.on('hover', () => {
  console.log('change no 2');
});
user.on('change', () => {
  console.log('change no 3');
});

user.trigger('change');

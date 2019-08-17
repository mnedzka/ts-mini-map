import { User } from './models/User';

const user = new User({});

user.on('change', () => {});
user.on('hover', () => {});
user.on('change', () => {});

console.log(user);

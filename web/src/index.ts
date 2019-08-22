import { User } from './models/User';

const user = new User({ name: 'aaa', age: 9999 });

// user.set({ name: 'newName', age: 69 });
user.save();

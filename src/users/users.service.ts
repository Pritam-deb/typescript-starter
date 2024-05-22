import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: '1', name: 'John', role: 'admin' },
    { id: '2', name: 'Doe', role: 'intern' },
    { id: '3', name: 'Smith', role: 'mentor' },
    { id: '4', name: 'Jane', role: 'intern' },
    { id: '5', name: 'Joe', role: 'admin' },
  ];

  findAll(role?: 'admin' | 'intern' | 'mentor') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id.toString());
  }

  create(user: { name: string; role: 'admin' | 'intern' | 'mentor' }) {
    const userId = (this.users.length + 1).toString();
    const newUser = { id: userId, ...user };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, userUpdate: object) {
    const index = this.users.findIndex((user) => user.id === id.toString());
    this.users[index] = { ...this.users[index], ...userUpdate };
    return this.users[index];
  }

  delete(id: number) {
    const index = this.users.findIndex((user) => user.id === id.toString());
    const user = this.users[index];
    this.users = this.users.filter((user) => user.id !== id.toString());
    return user;
  }
}

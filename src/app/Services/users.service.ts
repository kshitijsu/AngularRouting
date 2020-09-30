import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  users: any = [
    {
      id: 243,
      name: "Kshitij",
      city: "Rajnandgaon",
    },
    {
      id: 676,
      name: "Rahul",
      city: "Delhi",
    },
    {
      id: 454,
      name: "Mihir",
      city: "Agra",
    },
  ];

  constructor() {}

  getAllUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.filter((user) => user.id === id)[0];
  }

  isAdmin(): boolean {
    return false;
  }
}

import { faker } from "@faker-js/faker";

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    constructor() {
        this.name = faker.name.firstName() + ' ' + faker.name.lastName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    markerContent(): string {
        return `<h3>My name is ${this.name}</h3>`
    }

}
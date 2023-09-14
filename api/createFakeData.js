import { faker } from '@faker-js/faker';
import fs from "fs";

const generatePersonsData = (number) => {
    const persons = [];
    while (number >= 0) {
        persons.push({
            id: number,
            name: faker.person.fullName(),
            age: faker.number.int({ min: 13, max: 55 }),
            email: faker.internet.email(),
            description: faker.lorem.paragraphs(2),
            picture: faker.image.avatar(),
            country: faker.location.country(),
        });
        number--;
    }
    return persons;
};
fs.writeFileSync(
    "./db.json",
    JSON.stringify(
        {
            players: generatePersonsData(54),
            users: []
        }
    )
);
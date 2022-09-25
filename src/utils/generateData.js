import { faker } from "@faker-js/faker";

/**
 * Generate users data using faker
 *
 * @returns
 */
export const generateUser = () => {
  const users = [];
  Array.from({ length: 10 }).forEach(() => {
    return {
      userId: faker.datatype.uuid(),
      userName: faker.internet.userName(),
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      avatar: faker.image.avatar(),
      registeredAt: faker.date.past(),
    };
  });
  return users;
};

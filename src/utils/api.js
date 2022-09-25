import { faker } from "@faker-js/faker";

const timer = 3000;
let users = [];

/**
 * Authentication API
 *
 * @param {*} param0
 * @returns
 */
export const authenticateUser = (userName, password) =>
  new Promise((resolve, reject) => {
    const users =
      userName === "creed_bear" && password === "12345"
        ? loginSuccessResponse()
        : loginErrorResponse();
    if (!users) {
      return setTimeout(() => reject(users), timer);
    }
    setTimeout(() => resolve(users), timer);
  }).then((value) => value.data);

/**
 * Response of if login is success
 *
 * @returns
 */
const loginSuccessResponse = () => {
  return {
    data: {
      status: "success",
      user: {
        id: faker.datatype.uuid(),
        email: faker.internet.email(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        avatar: faker.image.avatar(),
      },
    },
  };
};

/**
 * Response of if login is error
 *
 * @returns
 */
const loginErrorResponse = () => {
  return {
    data: {
      status: "error",
      user: {},
    },
  };
};

/**
 * API for get all the users
 * If limit not pass it will take 10 by default
 *
 * @param {*} pageNumber
 * @param {*} limit
 * @param {*} totalSize
 */
export const getUsersList = async (pageNumber, limit = 10, totalSize = 0) => {
  const promiseData = new Promise((resolve, reject) => {
    const users = listAllUsers(pageNumber, limit, totalSize);
    setTimeout(() => resolve(users), limit);
  });
  return await Promise.all([promiseData]).then((data) => data[0]);
};

/**
 * Get all users using faker
 *
 * @param {*} pageNumber
 * @param {*} limit
 * @param {*} totalSize
 * @returns Object
 */
const listAllUsers = (pageNumber, limit, totalSize) => {
  const array = [];
  Array.from({ length: limit }).forEach(() => {
    array.push({
      id: faker.datatype.uuid(),
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      avatar: faker.image.avatar(),
    });
  });
  users = [...users, ...array];
  return {
    page: pageNumber,
    per_page: limit,
    total: users.length,
    total_pages: 2,
    data: users,
  };
};

const createUser = (email, firstName, lastName) => {
  new Promise((resolve, reject) => {
    const user = [
      ...user,
      {
        id: faker.datatype.uuid(),
        email: email,
        first_name: firstName,
        last_name: lastName,
        avatar: faker.image.avatar(),
      },
    ];
    setTimeout(
      () =>
        resolve({
          data: {
            status: true,
          },
        }),
      timer
    );
  });
};

/**
 * Update user by id
 *
 * @param {*} id
 * @param {*} email
 * @param {*} firstName
 * @param {*} lastName
 */
const updateUser = (id, email, firstName, lastName) => {
  new Promise((resolve, reject) => {
    const index = users.findIndex((x) => x.id === id);
    users[index] = {
      email,
      firstName,
      lastName,
    };
    setTimeout(
      () =>
        resolve({
          data: {
            status: true,
          },
        }),
      timer
    );
  });
};

/**
 * Delete users by id
 *
 * @param {*} id
 */
const deleteUser = (id) => {
  new Promise((resolve, reject) => {
    const index = users.findIndex((x) => x.id === id);
    delete users[index];
    setTimeout(
      () =>
        resolve({
          data: {
            status: true,
          },
        }),
      timer
    );
  });
};

const getUserById = (id) => {
  new Promise((resolve, reject) => {
    const index = users.findIndex((x) => x.id === id);
    setTimeout(() => resolve(users[index]), timer);
  });
};

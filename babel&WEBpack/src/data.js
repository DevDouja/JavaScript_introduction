const users = [
  { name: 'sara', premium: true },
  { name: 'lina', premium: false },
  { name: 'miriam', premium: true },
  { name: 'flowerp', premium: true },
  { name: 'peach', premium: false },
  { name: 'bowser', premium: false }
];

// export default users;

const getPremUsers = (users) => {
  return users.filter(user => user.premium);
};

export { getPremUsers, users as default };
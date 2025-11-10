// Destructuring

// Object Destructuring

const user = {
  id: 1234,
  name: {
    firstName: "Abu",
    middleName: "Jaher",
    lastName: "Rasel",
  },
  gender: "male",
  favoriteColor: "green",
  hobby: "traveling",
};

// const myFirstName = user.name.firstName;
// const myFavoriteColor = user.favoriteColor;

const {
  favoriteColor: myFavoriteColor,
  name: { firstName: myFirstName, lastName },
  //  { firstName: myFirstName} this is naming to destructuring data and there is not define the type of the value
  hobby,
} = user;

// Array Destructuring

const friends = ["Karim", "Rahim", "Mohim"];

// const bestFriend = friends[1];

const [, bestFriend] = friends;

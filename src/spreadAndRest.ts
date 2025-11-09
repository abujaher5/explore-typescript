// spread operation
// for array
const friends = ["Rahim", "Karim", "Jamal"];

const schoolFriends = ["Kamal", "Rahat", "Shifat"];
const collegeFriends = ["Fardin", "Noyan", "Rifat"];

// friends.push(schoolFriends); // error occur   // op:[ 'Rahim', 'Karim', 'Jamal', [ 'Kamal', 'Rahat', 'Shifat' ] ]

// friends.push(...schoolFriends, ...collegeFriends); // ... is spread operator . op: [
//   'Rahim', 'Karim', 'Jamal', 'Kamal', 'Rahat', 'Shifat', 'Fardin', 'Noyan', 'Rifat'
// ]

// for object
const user = {
  name: "Rasel",
  phoneNo: "0180000000",
};
const otherInfo = {
  hobby: "Traveling",
  favoriteColor: "Green",
};
const userInfo = { ...user, ...otherInfo };
// console.log(userInfo); // op:{name: 'Rasel', phoneNo: '0180000000',hobby: 'Traveling',favoriteColor: 'Green'
// }

// Rest operator (so many input in on an array)

// const sendInvite = (friend1: string, friend2: string, friend3: string) => {
//   console.log(`Sent Invitation to ${friend1}`);
//   console.log(`Sent Invitation to ${friend2}`);
//   console.log(`Sent Invitation to ${friend3}`);
// };
// sendInvite("Pintu", "Cintu", "Bulbul");

const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`Send Invitation To ${friend}`)
  );
};
sendInvite("Pintu", "Cintu", "Bulbul", "Chulbul");

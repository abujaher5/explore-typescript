// enum

// type UserRoles = "Admin" | "Editor" | "Viewer";

// const canEdit = (role: UserRoles) => {
//   if (role === "Admin" || role === "Editor") {
//     return true;
//   } else return false;
// };
// // in this case need to write manually every time to get the role
// const wantEdit = canEdit("Admin");
// console.log(wantEdit); // op:true

enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}
const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};
// in this case need to write manually every time to get the role
const wantEdit = canEdit(UserRoles.Admin);
// console.log(wantEdit); // op:true

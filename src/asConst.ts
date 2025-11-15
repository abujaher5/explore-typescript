// as const assertion

// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

const UserRoles = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

const canEdit = (role: keyof typeof UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};
const result = canEdit(UserRoles.Admin);
// console.log(result); // op:true

const UserRoles1 = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

const canEdit1 = (role: (typeof UserRoles1)[keyof typeof UserRoles]) => {
  if (role === UserRoles1.Admin || role === UserRoles1.Editor) {
    return true;
  } else return false;
};
const result1 = canEdit(UserRoles.Admin);
// console.log(result1); // op:true

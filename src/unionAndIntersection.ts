// Union |

type UserRole = "admin" | "user";
const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
};

// console.log(getDashboard("user")); // op:User Dashboard

// Intersection &

type Employee = {
  id: number;
  name: string;
  phoneNo: string;
};
type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const MdKhan: EmployeeManager = {
  id: 123,
  name: "Md khan",
  phoneNo: "0133",
  designation: "manager",
  teamSize: 4,
};

// conditional type : which type dependent on condition

type A = null;
type B = undefined;
type C = A extends number ? true : B extends undefined ? true : false;
// C is a conditional type which is dependent on type A and B
type RichPeoplesVehicle = {
  bike: string;
  car: string;
  cycle: string;
};
type FindVehicle<T> = T extends keyof RichPeoplesVehicle ? true : false;
type HasBike = FindVehicle<"ship">; // HasBike =false

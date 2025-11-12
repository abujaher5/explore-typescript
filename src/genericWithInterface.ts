interface Developer<T, X = null> {
  name: string;
  age: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  personalStudio: boolean;
  bike?: X;
}

const juniorDeveloper: Developer<{
  digitalTime: string;
  stopWatch: boolean;
}> = {
  name: "Mr. X",
  age: 18,
  device: {
    brand: "lenovo",
    model: "a34",
    releasedYear: "2018",
  },
  personalStudio: false,
  smartWatch: {
    digitalTime: "Yes",
    stopWatch: true,
  },
};

// const seniorDeveloper: Developer<{
//   heartRate: string;
//   callSupport: boolean;
//   calculator: boolean;
//   camera: boolean;
// }> = {
//   name: "Mr. Y",
//   age: 30,
//   device: {
//     brand: "apple",
//     model: "mac book pro",
//     releasedYear: "2025",
//   },
//   personalStudio: true,
//   smartWatch :{
//     heartRate:'digitally count',
//     callSupport:true,
//     calculator:true,
//     camera:true

//   }
// };

interface SmartWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  camera: boolean;
}

interface Bike {
  brand: string;
  releasedYear?: number;
  engineCapacity: string;
}
const seniorDeveloper: Developer<
  SmartWatch,
  {
    brand: string;
    releasedYear?: number;
    engineCapacity: string;
  }
  // Bike
  // also can use Bike interface here
> = {
  name: "Mr. Y",
  age: 30,
  device: {
    brand: "apple",
    model: "mac book pro",
    releasedYear: "2025",
  },
  personalStudio: true,
  smartWatch: {
    heartRate: "digitally count",
    callSupport: true,
    calculator: true,
    camera: true,
  },
  bike: {
    brand: "Yamaha",
    engineCapacity: "160cc",
  },
};

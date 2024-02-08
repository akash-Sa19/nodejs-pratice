const { log } = require("console");
const os = require("os");

// info about the current user
const user = os.userInfo();
// console.log(os.uptime());

const currentOs = {
  //give type of os -> windows, linux, macos
  name: os.type(),
  // give the os type like windows 11, window 10
  release: os.release(),
  // tells total ram
  totalMem: os.totalmem(),
  // tells free ram
  freeMem: os.freemem(),
};
console.log(currentOs);

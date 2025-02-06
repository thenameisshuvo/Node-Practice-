const os = require('os');

//information about the current user


const user = os.userInfo();
console.log(user);


//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

var privateIP = require('../');

return privateIP().then((ip) => {
  console.log(ip);
}).catch((err) => {
  if (err.timeout) {
    console.error('Request Timeout.');
  } else {
    console.error(err);
  }
})

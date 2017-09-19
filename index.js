const request = require('superagent');
const host = '169.254.169.254';

function privateIP() {
  return request.get('http://'+host+'/latest/meta-data/local-ipv4')
    .timeout(100)
    .then((ip) => {
      if (typeof ip == 'string' && ip.length == 0) throw new Error('AWS returned invalid ip address.');
      return ip;
    });
}

module.exports = privateIP;
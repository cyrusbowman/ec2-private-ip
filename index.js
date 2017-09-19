const request = require('superagent');
const host = '169.254.169.254';

function privateIP() {
  return request.get('http://'+host+'/latest/meta-data/local-ipv4')
    .timeout(100)
    .then((ip) => {
      if (!ip || !ip.text || typeof ip.text != 'string' || ip.text.length == 0) throw new Error('AWS returned invalid ip address.');
      return ip.text;
    });
}

module.exports = privateIP;

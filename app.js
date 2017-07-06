const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

console.log(argv.a);

var encodedAddress = encodeURIComponent(argv.address);
// var encodedAddress = '1301%20lombard%20street%20philadelphia';
request({
  url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`
}, (error, response, body) => {
  // console.log(JSON.stringify(body, undefined, 2));
  // console.log(body);
  var body = JSON.parse(body);
  console.log(`Lat: ${body.results[0].geometry.location.lat}`);
  console.log(`Lng: ${body.results[0].geometry.location.lng}`);
});

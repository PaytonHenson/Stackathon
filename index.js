const watson = require('watson-developer-cloud');
const alchemy_language = watson.alchemy_language({
  api_key: '6ff345eccabba7b5668e24cfb5d344ad11ff61e1'
});

const fs = require('fs');

let filenames = fs.readdirSync('./stories');

filenames.forEach(filename => {

})

let parameters;


fs.readFile('./stories/the_grand_inquisitor_dostoevsky.txt', 'utf8', function (err, contents) {
  if (err) return console.log(err);
  parameters = {
    text: contents.toString()
  };
  alchemy_language.emotion(parameters, function (err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(response);
  });

});

const app = require('./app');
const db = require('./db');

app.listen(8080, function (err) {
  if (err) throw err;
  console.log('HTTP server patiently waiting on port 8080');
  db.sync()
  .then(() => {
    console.log('postgres server totally connected too');
  });
});

module.exports = app;

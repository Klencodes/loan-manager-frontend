// const express = require('express');
// const app = express();
// app.use(express.static(__dirname + '/dist'));
// app.listen(process.env.PORT || 8080);
// const forceSSL = function() {
//   return function (req, res, next) {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//       return res.redirect(
//        ['https://', req.get('Host'), req.url].join('')
//       );
//     }
//     next();
//   }
// }
// app.use(forceSSL());
const path = require('path');
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/frontend/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
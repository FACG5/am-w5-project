const logic = require('./functions');

const router = (req, res) => {
  const endpoint = req.url;

  if (endpoint === '/') {
    logic.serveHome(res, '/index.html');
  } else if (['/favicon.ico', '/css/style.css', '/js/dom.js', '/js/request.js'].includes(endpoint)) {
    logic.serveHome(res, endpoint);
  } else {
    logic.pageNotFound(res);
  }
};

module.exports = router;

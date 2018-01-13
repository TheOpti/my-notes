import jwt from 'jsonwebtoken';

function authenticate(req, res, next) {
  // check header or url parameters or post parameters for token
  const token = req.headers['x-access-token'];

  if (token) {
    // TODO place key to some config file
    jwt.verify(token, 'RESTFULAPIs', function(err, decoded) {
      if (err) {
        res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token return an error
    res.status(403).send({
      success: false,
      message: 'No token provided!'
    });
  }
}

export default authenticate;

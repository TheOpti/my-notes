function me(req, res) {
  return res
    .send({ user: req.user });  
}

export default me;

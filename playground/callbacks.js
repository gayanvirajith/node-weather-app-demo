var getUser = (id, callback) => {

  // Dummy user object for now!
  var u = {
    id: id,
    name: 'Gayan'
  };

  setTimeout(() => {
    callback(u);
  }, 1000)
};


getUser(33, (userObject) => {
  console.log(userObject);
});

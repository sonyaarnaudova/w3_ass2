function loadUsers(userIds, load, done) { //solution

    var users = [];
    let completed = 0;
    userIds.forEach(function(id, index) {
      load(id, function(user) {
        users[index] = user;
        if (++completed === userIds.length) return done(users)
      })
    })
  }
  
module.exports = loadUsers;

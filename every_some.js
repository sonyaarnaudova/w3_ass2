function checkUsersValid(goodUsers) { //ex 5
    return function allUsersValid(submittedUsers) {
      return submittedUsers.every(function(submittedUser) {
        return goodUsers.some(function(goodUser) {
          return goodUser.id === submittedUser.id;
        });
      });
    };
  }
  module.exports = checkUsersValid;
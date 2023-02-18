function getShortMessages(messages) {
    return messages.filter(function(smth) {
      return smth.message.length < 50
    }).map(function(smth) {
      return smth.message
    })
  }
  module.exports = getShortMessages

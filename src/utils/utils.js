module.exports.getDurationStringFromTotalSeconds = (seconds) => {
  let minutes = Math.floor(seconds / 60)
  seconds = seconds - (minutes * 60)
  return String(minutes) + ':' + String(("0" + seconds).slice(-2))
}
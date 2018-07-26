module.exports.getDurationStringFromTotalSeconds = (seconds) => {
  let minutes = Math.floor(seconds / 60)
  seconds = seconds - (minutes * 60)
  return String(minutes) + ':' + String(("0" + seconds).slice(-2))
}

module.exports.parse = (search) => {
return search ? JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) }): {}
}

module.exports.qsStringify = (queryString) => {
  let result = ""
  if (!queryString) return result;
  for (const property in queryString) {
    if (queryString.hasOwnProperty(property)) {
      const value = queryString[property];
      result += result ? "&" : "?"
      result += property
      result += "="
      result += value

    }
  }
  return result
}
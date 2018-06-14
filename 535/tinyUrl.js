let urls = [];
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  urls.push(longUrl)
  return 'http://tinyurl.com/' + (urls.length - 1)
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  let arr = shortUrl.split('/');
  let n = parseInt(arr[arr.length - 1])
  return urls[n];
};
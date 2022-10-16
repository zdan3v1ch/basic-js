const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let result = {};

  domains.forEach(newDom => {
    let newDomArr = newDom.split('.');

    for (let i = 0; i < newDomArr.length; i++) {
      let domName = '.' + newDomArr.slice(i).reverse().join('.');

      if (result.hasOwnProperty(domName)) {
        result[domName] = result[domName] + 1;
      } else {
        result[domName] = 1;
      }

    }
  })

  return result

}

module.exports = {
  getDNSStats
};

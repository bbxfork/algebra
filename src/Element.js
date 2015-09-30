
/**
 * Abstract element
 *
 * It has a *data* attribute that can contain anything, validated by its *check*.
 *
 * @param {Any} data
 * @param {Function} check
 */

function Element (data, check) {
  if (typeof data === 'undefined')
    throw new TypeError('Undefined data')

  if (check(data))
    this.data = data
  else
    throw new TypeError('Invalid data = ' + data)
}

function valueOf () {
  return this.data
}

Element.prototype.valueOf = valueOf

module.exports = Element


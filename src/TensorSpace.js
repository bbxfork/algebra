
var inherits = require('inherits')

var Space = require('./Space')

/**
 * Space of tensors
 *
 * @param {field}
 * @param {Array} controvariant indices
 * @param {Array} covariant indices
 */

function TensorSpace (field, controvariant, covariant) {
  var self = this

  var indices = controvariant.concat(covariant)

  var type = [controvariant.length, covariant.length]
  self.type = type

  var space = new Space(field, indices)

  self.addition = space.addition
  self.subtraction = space.subtraction

  function Tensor (data) {
    space.Element.call(this, data)
  }


 inherits(Tensor, space.Element)

  self.Tensor = Tensor
}

inherits(TensorSpace, Space)

module.exports = TensorSpace


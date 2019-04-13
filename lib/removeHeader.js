'use strict'
module.exports = function(text) {
	const lines = text.split('\n')
	return lines.slice(2).join('\n')
}

'use strict'
module.exports = function(text) {
	return text
		.replace(/(?<=\n)# /g, '## ')
		.replace(/\n{3,}/g, '\n\n')
}

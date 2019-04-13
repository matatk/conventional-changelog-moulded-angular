'use strict'
module.exports = function(text) {
	return text
		.replace(/^# /, '## ')
		.replace(/(?<=\n)# /g, '## ')
		.replace(/\n{3,}/g, '\n\n')
}

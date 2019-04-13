'use strict'
const removeHeader = require('./removeHeader')
const fixHeadingsAndWhitespace = require('./fixHeadingsAndWhitespace')

module.exports = function(packageTitle, existingLog, newLog) {
	const newHeader = `# ${packageTitle} Changelog\n\n`

	const fixedNewLog = fixHeadingsAndWhitespace(newLog)

	const existingMinusHeader = existingLog
		? removeHeader(existingLog)
		: null

	const whole = existingLog
		? newHeader + fixedNewLog + existingMinusHeader
		: newHeader + fixedNewLog.slice(0, -1)

	return whole
}

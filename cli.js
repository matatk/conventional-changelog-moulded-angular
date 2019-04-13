#!/usr/bin/env node
'use strict'
const fs = require('fs')
const conventionalChangelogCore = require('conventional-changelog-core')

const combine = require('./lib/combine')
const writerOpts = require('./conventionalChangelogWriterOpts').writerOpts

const changelogFile = 'CHANGELOG.md'

function usageAndExit() {
	console.error('Usage: conventional-changelog-moulded-angular <package-title>')
	process.exit(42)
}

if (process.argv.length !== 3) {
	usageAndExit()
}

const title = process.argv[2].length > 0
	? process.argv[2]
	: usageAndExit()

function newChanges(callback) {
	const chunks = []
	const stream = conventionalChangelogCore({
		releaseCount: 1,
		config: require('conventional-changelog-angular')
	}, null, null, null, writerOpts)

	stream.on('data', chunk => chunks.push(chunk))
	stream.on('end', () => callback(Buffer.concat(chunks).toString()))
}

newChanges(newChanges => {
	if (newChanges) {
		const existing = fs.existsSync(changelogFile)
			? fs.readFileSync(changelogFile, 'utf-8')
			: null
		const whole = combine(title, existing, newChanges)
		fs.writeFileSync(changelogFile, whole)
	} else {
		console.log('No new changes; nothing written.')
	}
})

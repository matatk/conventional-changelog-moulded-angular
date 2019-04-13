'use strict'
const tap = require('tap')
const combine = require('../lib/combine')

tap.test('when there is no existing log', t => {
	const newLog = `## 0.1.0

First lot of awesome stuff!

`

	const expected = `# Wibble changelog

## 0.1.0

First lot of awesome stuff!
`

	t.equal(
		combine('Wibble', null, newLog),
		expected,
		'combines from scratch')

	t.end()
})

tap.test('when there is existing loggage', t => {
	const existingLog = `# Landmarks changelog

## [2.5.5](https://github.com/matatk/landmarks/compare/2.5.4...2.5.5) (2019-03-25)

Stuff!
`

	const newLog = `## [2.5.6](https://github.com/matatk/landmarks/compare/2.5.5...2.5.6) (2019-04-13)

Awesome new stuff!

`

	const expectedCombined = `# Landmarks changelog

## [2.5.6](https://github.com/matatk/landmarks/compare/2.5.5...2.5.6) (2019-04-13)

Awesome new stuff!

## [2.5.5](https://github.com/matatk/landmarks/compare/2.5.4...2.5.5) (2019-03-25)

Stuff!
`

	t.equal(
		combine('Landmarks', existingLog, newLog),
		expectedCombined,
		'combines logs')

	t.end()
})

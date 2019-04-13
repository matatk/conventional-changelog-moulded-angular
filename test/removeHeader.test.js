'use strict'
const tap = require('tap')
const removeHeader = require('../lib/removeHeader')

tap.test('removing first line', t => {
	const text = `# The Changelog

## 0.4.2 (date)

### Features

* It Just Works :-).`

	const expected = `## 0.4.2 (date)

### Features

* It Just Works :-).`

	t.equal(removeHeader(text), expected, 'removes the first line')
	t.end()
})

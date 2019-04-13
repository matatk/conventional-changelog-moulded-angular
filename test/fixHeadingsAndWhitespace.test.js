'use strict'
const tap = require('tap')
const fixHeadingsAndWhitespace = require('../lib/fixHeadingsAndWhitespace')

tap.test('on first use', t => {
	const firstChangesText = `# 0.1.0


### Features

Cool stuff!



`

	const expected = `## 0.1.0

### Features

Cool stuff!

`

	t.equal(
		fixHeadingsAndWhitespace(firstChangesText),
		expected,
		'fixes headings and spacing')
	t.end()
})

tap.test('in normal use', t => {
	const test = `## [2.5.1](https://github.com/matatk/landmarks/compare/2.5.0...2.5.1) (2019-01-19)


### Bug fixes

* **UI:** Add help and preferences links to GUIs ([#253](https://github.com/matatk/landmarks/issues/253)) ([da628f9](https://github.com/matatk/landmarks/commit/da628f9)), closes [#250](https://github.com/matatk/landmarks/issues/250)
* **UI:** Clarify and clean up styles ([#254](https://github.com/matatk/landmarks/issues/254)) ([61109fa](https://github.com/matatk/landmarks/commit/61109fa))
* Change "show all landmarks" key to avoid Firefox clash ([#256](https://github.com/matatk/landmarks/issues/256)) ([8d73dbd](https://github.com/matatk/landmarks/commit/8d73dbd)), closes [#251](https://github.com/matatk/landmarks/issues/251)


### Build system

* Mozilla Add-ons build information script ([#255](https://github.com/matatk/landmarks/issues/255)) ([34501b7](https://github.com/matatk/landmarks/commit/34501b7)), closes [#252](https://github.com/matatk/landmarks/issues/252)


### Chores

* **release:** 2.5.1 ([#258](https://github.com/matatk/landmarks/issues/258)) ([9c0521d](https://github.com/matatk/landmarks/commit/9c0521d))


### Documentation

* **Help:** Update with changes for version 2.5.1 ([#257](https://github.com/matatk/landmarks/issues/257)) ([300109a](https://github.com/matatk/landmarks/commit/300109a))



# [2.5.0](https://github.com/matatk/landmarks/compare/2.4.3...2.5.0) (2019-01-15)


### Bug fixes

* **build:** Remove spurious .eslintrc.json from build and zip ([#242](https://github.com/matatk/landmarks/issues/242)) ([586bf90](https://github.com/matatk/landmarks/commit/586bf90))
* **UI:** Message consistency, visual text spacing, visual note spacing ([#247](https://github.com/matatk/landmarks/issues/247)) ([8c308af](https://github.com/matatk/landmarks/commit/8c308af))


### Build system

* Adopt conventional changelog and npm version scripts ([#239](https://github.com/matatk/landmarks/issues/239)) ([f5e0b39](https://github.com/matatk/landmarks/commit/f5e0b39))
* Make the whole build process synchronous ([#241](https://github.com/matatk/landmarks/issues/241)) ([1c81099](https://github.com/matatk/landmarks/commit/1c81099))


### Chores

* **release:** 2.5.0 ([2826cf3](https://github.com/matatk/landmarks/commit/2826cf3)), closes [conventional-changelog/conventional-changelog#396](https://github.com/conventional-changelog/conventional-changelog/issues/396)


### Documentation

* **Help:** Describe new features; heading case consistency ([#248](https://github.com/matatk/landmarks/issues/248)) ([85c9659](https://github.com/matatk/landmarks/commit/85c9659))
* **README:** Fix typo; clarity and style improvements ([#240](https://github.com/matatk/landmarks/issues/240)) ([9968507](https://github.com/matatk/landmarks/commit/9968507)), closes [#232](https://github.com/matatk/landmarks/issues/232)


### Features

* Enhanced help documentation, bundled with the extension ([#237](https://github.com/matatk/landmarks/issues/237)) ([a8be495](https://github.com/matatk/landmarks/commit/a8be495)), closes [#165](https://github.com/matatk/landmarks/issues/165) [#165](https://github.com/matatk/landmarks/issues/165)
* **toggle:** Show all landmarks keyboard shortcut ([#245](https://github.com/matatk/landmarks/issues/245)) ([10691ee](https://github.com/matatk/landmarks/commit/10691ee)), closes [#165](https://github.com/matatk/landmarks/issues/165) [#120](https://github.com/matatk/landmarks/issues/120)
* **toggle:** Show all landmarks UI ([#246](https://github.com/matatk/landmarks/issues/246)) ([0803ed7](https://github.com/matatk/landmarks/commit/0803ed7)), closes [#120](https://github.com/matatk/landmarks/issues/120)



`

	const expected = `## [2.5.1](https://github.com/matatk/landmarks/compare/2.5.0...2.5.1) (2019-01-19)

### Bug fixes

* **UI:** Add help and preferences links to GUIs ([#253](https://github.com/matatk/landmarks/issues/253)) ([da628f9](https://github.com/matatk/landmarks/commit/da628f9)), closes [#250](https://github.com/matatk/landmarks/issues/250)
* **UI:** Clarify and clean up styles ([#254](https://github.com/matatk/landmarks/issues/254)) ([61109fa](https://github.com/matatk/landmarks/commit/61109fa))
* Change "show all landmarks" key to avoid Firefox clash ([#256](https://github.com/matatk/landmarks/issues/256)) ([8d73dbd](https://github.com/matatk/landmarks/commit/8d73dbd)), closes [#251](https://github.com/matatk/landmarks/issues/251)

### Build system

* Mozilla Add-ons build information script ([#255](https://github.com/matatk/landmarks/issues/255)) ([34501b7](https://github.com/matatk/landmarks/commit/34501b7)), closes [#252](https://github.com/matatk/landmarks/issues/252)

### Chores

* **release:** 2.5.1 ([#258](https://github.com/matatk/landmarks/issues/258)) ([9c0521d](https://github.com/matatk/landmarks/commit/9c0521d))

### Documentation

* **Help:** Update with changes for version 2.5.1 ([#257](https://github.com/matatk/landmarks/issues/257)) ([300109a](https://github.com/matatk/landmarks/commit/300109a))

## [2.5.0](https://github.com/matatk/landmarks/compare/2.4.3...2.5.0) (2019-01-15)

### Bug fixes

* **build:** Remove spurious .eslintrc.json from build and zip ([#242](https://github.com/matatk/landmarks/issues/242)) ([586bf90](https://github.com/matatk/landmarks/commit/586bf90))
* **UI:** Message consistency, visual text spacing, visual note spacing ([#247](https://github.com/matatk/landmarks/issues/247)) ([8c308af](https://github.com/matatk/landmarks/commit/8c308af))

### Build system

* Adopt conventional changelog and npm version scripts ([#239](https://github.com/matatk/landmarks/issues/239)) ([f5e0b39](https://github.com/matatk/landmarks/commit/f5e0b39))
* Make the whole build process synchronous ([#241](https://github.com/matatk/landmarks/issues/241)) ([1c81099](https://github.com/matatk/landmarks/commit/1c81099))

### Chores

* **release:** 2.5.0 ([2826cf3](https://github.com/matatk/landmarks/commit/2826cf3)), closes [conventional-changelog/conventional-changelog#396](https://github.com/conventional-changelog/conventional-changelog/issues/396)

### Documentation

* **Help:** Describe new features; heading case consistency ([#248](https://github.com/matatk/landmarks/issues/248)) ([85c9659](https://github.com/matatk/landmarks/commit/85c9659))
* **README:** Fix typo; clarity and style improvements ([#240](https://github.com/matatk/landmarks/issues/240)) ([9968507](https://github.com/matatk/landmarks/commit/9968507)), closes [#232](https://github.com/matatk/landmarks/issues/232)

### Features

* Enhanced help documentation, bundled with the extension ([#237](https://github.com/matatk/landmarks/issues/237)) ([a8be495](https://github.com/matatk/landmarks/commit/a8be495)), closes [#165](https://github.com/matatk/landmarks/issues/165) [#165](https://github.com/matatk/landmarks/issues/165)
* **toggle:** Show all landmarks keyboard shortcut ([#245](https://github.com/matatk/landmarks/issues/245)) ([10691ee](https://github.com/matatk/landmarks/commit/10691ee)), closes [#165](https://github.com/matatk/landmarks/issues/165) [#120](https://github.com/matatk/landmarks/issues/120)
* **toggle:** Show all landmarks UI ([#246](https://github.com/matatk/landmarks/issues/246)) ([0803ed7](https://github.com/matatk/landmarks/commit/0803ed7)), closes [#120](https://github.com/matatk/landmarks/issues/120)

`

	t.equal(
		fixHeadingsAndWhitespace(test),
		expected,
		'fixes headings and spacing')
	t.end()
})

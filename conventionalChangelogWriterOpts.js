'use strict'
// The aim of this is to use the Angular preset, but print out more types of commit message; thanks https://github.com/conventional-changelog/conventional-changelog/issues/317#issuecomment-390104826 :-)
// This file started off as https://github.com/conventional-changelog/conventional-changelog-angular/blob/master/index.js which doesn't have a licence, so is assumed to be in the public domain.
const conventionalCommitTypes = require('conventional-commit-types').types

const writerOpts = {
	transform: function(commit, context) {
		const issues = []

		commit.notes.forEach(function(note) {
			note.title = 'BREAKING CHANGES'
		})

		if (commit.type === null) {
			return  // commit message doesn't conform to the standard
		} else if (conventionalCommitTypes.hasOwnProperty(commit.type)) {
			const title = conventionalCommitTypes[commit.type].title
			const sentenceCaseTitle = title.charAt(0)
				+ title.slice(1).toLowerCase()
			commit.type = sentenceCaseTitle
		}

		if (commit.scope === '*') {
			commit.scope = ''
		}

		if (typeof commit.hash === 'string') {
			commit.hash = commit.hash.substring(0, 7)
		}

		if (typeof commit.subject === 'string') {
			const url = [context.host, context.owner, context.repository, 'issues/'].join('/')
			if (url) {
				// GitHub issue URLs.
				commit.subject = commit.subject.replace(/#([0-9]+)/g, function(_, issue) {
					issues.push(issue)
					return '[#' + issue + '](' + url + issue + ')'
				})
			}
			// GitHub user URLs.
			commit.subject = commit.subject.replace(/@([a-zA-Z0-9_]+)/g, '[@$1](https://github.com/$1)')
		}

		// remove references that already appear in the subject
		commit.references = commit.references.filter(function(reference) {
			if (issues.indexOf(reference.issue) === -1) {
				return true
			}

			return false
		})

		return commit
	}
}

// Ensure that what is exported is a conventional-changelog config object, so
// that this file can be passed to the --config option of the
// conventional-changelog CLI tool, for debugging purposes.
module.exports = {
	'writerOpts': writerOpts
}

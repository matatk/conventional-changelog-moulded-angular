Conventional Changelog Moulded Angular
======================================

The Angular changelog style is clear and helpful, but it [semantically messes up the heading hierarchy](https://github.com/conventional-changelog/standard-version/issues/208). Also, [only a few commit types make it to the changelog](https://github.com/conventional-changelog/conventional-changelog/issues/317).

This wrapper fixes the heading hierarchy and reports all the commit types. It uses [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) and its [Angular preset](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) for most of the processing.

What does it do?
----------------

 * Makes all releases have level-two headings.

 * Reports all commit types.

 * Prepends a level-one heading "\<package-name\> Changelog" to the log.

How to use it
-------------

 * Create an empty initial commit in git and tag it "0.0.0". This ensures there's something to compare against when creating the changelog for the first real release.

 * Install this tool as a development dependency.

   ```
   npm install --save-dev 'matatk/conventional-changelog-moulded-angular#x.y.z'
   ```

   Where `#x.y.z` indicates your desired version number (if you leave that part out, you'll be kept up-to-date with the "master" branch whenever you `npm install`, which is probably not what you want).

 * Create or add to the "npm version" script in "package.json".

   ```json
   "scripts": {
     "version": "conventional-changelog-moulded-angular <package-name> && git add CHANGELOG.md"
   }
   ```

   This ensures that the changelog is updated and the updates are included in the commit that npm creates to tag the release.

 * The following ".npmrc" is recommended as it ensures a semantic commit message is used for the release. It also drops the "v" prefix from the version tags in git, which is a personal preference.

   ```
   tag-version-prefix=
   message=chore(release): %s
   ```

 * You can then ask npm to make and tag new release commits

   ```
   npm version (major|minor|patch)
   ```

   Be sure to set the "origin" remote for the repo before making your first real release, as the origin is needed to generate working version comparison links.

Notes
-----

 * A side effect of adding the changelog file to git in the `npm version` script is that the "chore(release):" commit that contains the changelog update isn't included in the changelog. This, however, seems neat, because it would be repeated in every changelog entry otherwise. It *does* still show up in the comparison between different versions on GitHub, which can be accessed from each version number link within the changelog.

 * Currently I have not come up with a good workflow for getting the release on to the "master" branch. If "master" is protected on GitHub then one can't push directly to it without the push passing status checks, which it can't yet. So far I have been making new squash merges to "master", which meant that the release tag gets created on the branch (as a result of running `npm version`) and then I have to delete it and re-tag "master" once it's been merged.

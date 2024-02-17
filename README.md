# @ocampoce/capitalize npm package

A helper function in JavaScript for capitalizing first letter in a string and leaving rest letter unchanged.

## Usage

```
import { capitalize } from '@ocampoce/capitalize';

capitalize('hello'); // 'Hello'
```

## Steps to creating and publishing an npm package

### Step 1 - Initialize npm package

    npm init

    // (Optional) - scope or namespace the package

    npm init --scope=namespace-goes-here

- Example: `npm init --scope=ocampoce`

### Step 2 - Create your package

After initializing, write some code to create your package, then push it to a remote repo like GitHub.

### Step 3 - Testing the package

Test you package using npmjs's [npm link](https://docs.npmjs.com/cli/v10/commands/npm-link) feature.

In the package repo:

    npm link

In the test repo:

    npm link package-name

- Example (non-scoped): `npm link capitalize`

- Example (scoped): `npm link @ocampoce/capitalize`

Test the package by importing it and using the package as intended. If everything works, you can now publish your package!

### Step 4 - Publishing the package

Login to npm to publish public package (must create an [npmjs.com](https://www.npmjs.com/) account)

    npm login

Publish a package two ways:

- Publish package (non-scoped)

        npm publish

- Publish a public "scoped" or "namespaced" package

        npm publish --access=public

Note: you may need to add `"type": "module"` in your
package's `package.json` file if it is not already there. Without this, you may get this error when attempting to publish.

    Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

## Misc (Docs to add SSH Keys to GitHub)

You may need to add an SSH key to GitHub if you would like to access it via SSH instead of https.

Here are some GitHub links that guide through SSH set up and adding it to GitHub and your local machine.

[adding-a-new-ssh-key-to-your-github-account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

[generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

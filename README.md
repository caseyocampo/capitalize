# @ocampoce/capitalize npm package

A helper function in JavaScript for capitalizing first letter in a string and leaving rest letter unchanged.

## Usage

```
import { capitalize } from '@ocampoce/capitalize';

capitalize('hello'); // 'Hello'
```

## Steps to creating and publishing an npm package

### Initialize npm package

    npm init

    // (Optional) - scope or namespace the package

    npm init --scope=namespace-goes-here

- Example: `npm init --scope=ocampoce`

After initializing, write some code and create your package, then push it to a remote repo like GitHub.

### Testing the package

In package repo:

    npm link

In test repo:

    npm link package-name

Test the package by importing it and using the package as intended. If everything works, you can now publish your package!

### Publishing the package

Login to npm to publish public package (must create an [npmjs.com](https://www.npmjs.com/) account)

    npm login

Publish a package two ways:

- Publish package (non-scoped)

        npm publish

- Publish a public "scoped" or "namespaced" package

        npm publish --access=public

## Misc (Docs to add SSH Keys to GitHub)

GitHub links:

[adding-a-new-ssh-key-to-your-github-account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

[generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

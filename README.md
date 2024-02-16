# @ocampoce/capitalize npm package

A helper function in JavaScript for capitalizing first letter in a string and leaving rest letter unchanged.

## Usage

```
import { capitalize } from 'capitalize';

capitalize('hello'); // 'Hello'
```

## Steps to creating and publishing an npm package

Initialize npm

    npm init

(Optional) - scope or namespace the repo

    npm init --scope=namespace-goes-here

- Example: `npm init --scope=ocampoce`

Test package in a separate package

    npm link

Login to npm to publish public package

    npm login

Publish a package two ways:

- Publish package

        npm publish

- Publish public "scoped" or "namespaced" package

        npm publish --access=public

## Misc (Docs to add SSH to GitHub)

GitHub links:

[adding-a-new-ssh-key-to-your-github-account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

[generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

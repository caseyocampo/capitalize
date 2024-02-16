# @ocampoce/capitalize npm package

A helper function in JavaScript for capitalizing first letter in a string and leaving rest letter unchanged.

## Usage

```
import { capitalize } from 'capitalize';

capitalize('hello'); // 'Hello'
```

## Docs

[adding-a-new-ssh-key-to-your-github-account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

[generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

## Publishing an npm package

1. Initialize npm
   `npm init`

- (Optional) - scope or namespace the repo
  `npm init scope=namespace-goes-here`

2. Test package in a separate repo
   `npm link`

3. Login to npm to publish public package
   `npm login`

4. Publish a package two ways:

- Publish package
  `npm publish`

- Publish public "scoped" or "namespaced" package
  `npm publish --access=public`

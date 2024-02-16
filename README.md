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

Test package in a separate repo
`npm link`

Login to npm to publish public package
`npm login`

Publish a package two ways

1. Publish package
   `npm publish`

2. Publish public "scoped" or "namespaced" package
   `npm publish --access=public`

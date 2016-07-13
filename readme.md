# download-github-package

Download a node module from github.

## Installation

```shell
npm [-g] install download-github-package
```

## Features

* Library to download packages
* CLI to download packages

## Usage

### node

*downloadGithubPackage* takes an package arg & a path as arguments and returns a promise, a promise that resolves once the package has been downloaded to the folder set in path.

```js
import downloadGithubPackage from 'download-github-package';

downloadGithubPackage({
  arg: 'user/repo#branch' // or github.com/user/repo or something simlar
  path: '/tmp' // package will be downlodaded to ${path}/packageName as defiend in the package.json in the github repo
}).then()
```

### cli

There's also a cli available!

```shell
download-github-package $packageArg [$path]
```

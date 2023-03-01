# is-sandpack

> Check if the process is running inside [Sandpack](https://sandpack.codesandbox.io/docs)

## Installation

```shell
npm install is-sandpack
#pnpm
pnpm add is-sandpack
```

## Usage

```js
import { isSandPack } from 'is-sandpack'

if (isSandPack()) {
	console.log('Running inside Sandpack')
}
```
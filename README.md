# @nicho/package-release

A test React component library for publishing to GitHub Packages.

## Installation

```bash
npm install @nicho/package-release
```

## Usage

```tsx
import { Button } from '@nicho/package-release'
import '@nicho/package-release/styles.css'

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('clicked!')}>
      Click me
    </Button>
  )
}
```

## Publishing to GitHub Packages

1. Create a `.npmrc` file in the project root:

```
@nicho:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

2. Generate a GitHub Personal Access Token with `write:packages` scope

3. Set the token as an environment variable or login:

```bash
npm login --registry=https://npm.pkg.github.com
```

4. Build and publish:

```bash
npm run build
npm publish
```


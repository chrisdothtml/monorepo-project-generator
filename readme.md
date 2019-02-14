# monorepo-project-generator

## Use

### 1. Clone this repo and install its deps

```sh
git clone git@github.com:chrisdothtml/monorepo-project-generator.git
cd monorepo-project-generator
yarn
```

### 2. Navigate to the dir where the packages will be

```sh
cd ../path/to/my-test-monorepo
```

### 3. Run the cli

```sh
../path/to/this/repo/generator <command> [args...]

# generate [n] number of packages that are randomly dependent
# on eachother
generator generate 100
```

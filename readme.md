# monorepo-project-generator

> Generate packages to stress test various monorepo approaches with

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

***Note***: this uses a seeded rng, so all random operations in commands are reproducable if the same command is run again (e.g. randomly making deps dependent on eachother, randomly adding deps to packages)

```sh
../path/to/this/repo/generator <command> [args...]

# provide a custom seed for the rng
generator <command> --seed=my-seed [args...]

# generate [n] number of packages that are randomly dependent
# on eachother
generator generate 100
```

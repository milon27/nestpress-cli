# NestPress cli

A CLI to automatically clone the [Nestpress template](https://github.com/milon27/nestpress)

## use

- Create a project with nestpress

```bash
# create on current directory
npx nestpress@latest init .

# create on sub directory
npx nestpress@latest init directory_name
```

- Create a single module inside feature directory

```bash
# create a module called admin [you can use m or module command]
npx nestpress@latest m admin
# or
npx nestpress@latest module admin -s # [-s is the option for single module, you can omit it by default its single]
```

- Create a multi module inside feature directory

```bash
# create a module called admin [you can use m or module command]
npx nestpress@latest m blog -m # [-m means multi module]

# create a single module inside blog multi module
npx nestpress@latest m category blog -s # this will create a category module inside blog directory

```

## author

[milon27.com](milon27.com)

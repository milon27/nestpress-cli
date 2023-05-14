# NestPress cli

## use

- create a project with nestpress

```bash
# create on current directory
npx nestpress init .

# create on sub directory
npx nestpress init directory_name
```

- create a single module inside feature directory

```bash
# create a module called admin [you can use m or module command]
npx nestpress m admin
# or
npx nestpress module admin -s # [-s is the option for single module, you can omit it by default its single]
```

- create a multi module inside feature directory

```bash
# create a module called admin [you can use m or module command]
npx nestpress m blog -m # [-m means multi module]

# create a single module inside customer multi module
npx nestpress m category blog -s # this will create a category module inside blog directory

```

## author

[milon27.com](milon27.com)

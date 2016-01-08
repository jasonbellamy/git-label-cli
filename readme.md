# git-label-cli

> CLI utility for [git-label](https://github.com/jasonbellamy/git-label)


## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --global git-label-cli`


## Usage

```bash
$ git-label --help

  Usage: git-label [options] [command]


  Commands:

    add      Add the specified labels to a repo
    remove   Remove the specified labels from a repo

  Options:

    -h, --help             output usage information
    -i, --interactive      run in interactive mode
    -a, --api <api>        api url
    -t, --token <token>    api token
    -r, --repo <repo>      repo name [username/repo]
    -p, --pattern <glob>  globbing pattern to the label packages
```


## Developing

[git-label-cli](https://github.com/jasonbellamy/git-label-cli) is built using **ES6**. Run the following task to compile the `src/` into `dist/`.

```bash
npm run build
```


## Related

- [git-label](https://github.com/jasonbellamy/git-label) - API for this module
- [git-label-packages](https://github.com/jasonbellamy/git-label-packages) - Default label packages for this module


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2016 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.

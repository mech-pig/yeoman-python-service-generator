# Python Service Generator

A [yeoman](yeoman.io) generator to scaffold out python-based services.


## Development

### Makefile

A Makefile is provided to automate some common tasks. Execute `make` to list the available commands.
The behaviour of these commands can be configured by setting the following environment variables:

variable | default | description
---|---|---
`LOCAL_BUILD_DIR` | `build` | set the target directory of the generator

### Run generator

Start generator with:

```shell
make generator-build
```

This command will execute the generator in `LOCAL_BUILD_DIR`.

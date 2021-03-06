# materialize-hooked

[![CircleCI](https://circleci.com/gh/hipstersmoothie/materialize-hooked.svg?style=svg)](https://circleci.com/gh/hipstersmoothie/materialize-hooked) [![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](http://hipstersmoothie.com/materialize-hooked/) [![codecov](https://codecov.io/gh/hipstersmoothie/materialize-hooked/branch/master/graph/badge.svg)](https://codecov.io/gh/hipstersmoothie/materialize-hooked)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

This is a component library built on [materialize.css](https://materializecss.com/). It implements all of the components supported by `materialize.css` using the new [react hooks API](https://reactjs.org/docs/hooks-intro.html).

## Developing

To start the development server ([storybook](https://github.com/storybooks/storybook/)) run the following command.

```sh
yarn storybook
```

or to start in test mode (no docs)

```sh
yarn storybook-test
```

## Testing

To run all the test suites (unit, snapshot, and visual) run the following command.

```sh
yarn test
```

This can take a pretty long time cause it build the whole storybook to take screenshots locally. If you already have the storybook running (in test mode) you can use the following command the run the tests it.

```sh
yarn test-all
```

To test just the snapshots.

```sh
yarn test-snapshots
```

## Contributing

At this point `materialize-hooked` is only built by me! It fits my use case and has most of the props and options I need. This doesn't mean I've solved your problems though so feel free to create issues or open pull requests!

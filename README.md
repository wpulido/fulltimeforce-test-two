# fulltimeforce-test-two

This is the repository for the "fulltimeforce-test-two" project.

## Overview

The "fulltimeforce-test-two" project is a small test with the sole purpose of fetching commits from a github repository and then display them in a list layout.
It is a monorepository configured with [Turbo](https://turbo.build), which uses a [Nest.js Backend](https://nestjs.com), a [Svelte frontend](https://svelte.dev/), it uses [Octokit](https://github.com/octokit) as the dependency for data fetching from [GitHub API](https://docs.github.com/en/rest?apiVersion=2022-11-28), [Tailwind CSS](https://tailwindcss.com) for styling and [TypeScript](https://typescriptlang.org) for our JavaScript typing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run the project locally, follow these steps:

1. [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository to your local machine using the following command.

`git clone https://github.com/wpulido/fulltimeforce-test-two.git`

3. CD into the project directory.

`cd fulltimeforce-test-two`

3. [Install](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-docker-for-use-with-github-packages) any necessary dependencies by using the following command.

NODE VERSION USED FOR THIS PROJECT: v18.17.0 (NPM v9.6.7)

`npm install`

4. Create a .env file in the root directory of this repository with the following variables:

- NODE_ENV
- GITHUB_USER
- GITHUB_REPO

Don't worry about any extra configuration with this, just adding the .env file and adding the three variables will do just fine.

## Usage

To use this project, follow these instructions:

1. Make sure you have completed the installation steps mentioned above.

2. Run the project using the following command:

`npm run dev`

Or

`npm run build` and then `npm run start`

3. Access the application by opening your web browser and navigating to the provided URL.

4. Interact with the application and explore its features.

## Contributing

Contributions are always welcome! Here's how you can contribute to the "fulltimeforce-test-two" project:

1. Fork the repository.
2. Make your changes in a new branch.
3. Submit a pull request with your changes.

Please make sure to follow the [code of conduct](CODE_OF_CONDUCT.md) when contributing.

## License

The "fulltimeforce-test-two" project is licensed under the [MIT License](LICENSE).

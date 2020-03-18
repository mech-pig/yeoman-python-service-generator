.DEFAULT_GOAL := help

.PHONY: help
help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


# Development

POETRY_INSTALL_EXTRAS = --extras "test" --extras "lint"
PYTEST_WATCH_ARGS = --doctest-modules -vv
PYTEST_TEST_ARGS = $(PYTEST_WATCH_ARGS) --maxfail=2 -rf -vv --strict --cov src --cov-branch

.PHONY: install-ci
install-ci:
	poetry install $(POETRY_INSTALL_EXTRAS) --no-dev

.PHONY: install-dev
install-dev: ## install base and dev dependencies
	poetry install $(POETRY_INSTALL_EXTRAS)

.PHONY: lint
lint: ## lint code
	poetry run flake8 src tests

.PHONY: tdd
tdd: ## start a TDD session (re-run test on saves)
	poetry run ptw -- $(PYTEST_WATCH_ARGS)

.PHONY: test
test: ## run all tests
	poetry run pytest $(PYTEST_TEST_ARGS)

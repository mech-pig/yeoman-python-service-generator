.DEFAULT_GOAL := help
LOCAL_BUILD_DIR := build

.PHONY: help
help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: generator-run
generator-run:
	@mkdir -p $(LOCAL_BUILD_DIR)
	@cd $(LOCAL_BUILD_DIR); yo --no-insight ../generators/app/

.PHONY: test
test:
	@echo "add some tests!"

.PHONY: docs
docs:
	@echo "add some documentation!"


# Release

CHANGELOG := CHANGELOG.md
VERSION = `npm run --silent get-version`

.PHONY: bump
bump:
	npm version $(INCREMENT) --git-tag-version false

.PHONY: changelog
changelog:
	git-chglog -o $(CHANGELOG) -next-tag $(VERSION)

.PHONY: release
release: test
	$(MAKE) bump INCREMENT=$(INCREMENT)
	$(MAKE) changelog
	$(MAKE) docs
	git add . && git commit -m "release: $(VERSION)" && git tag -a "$(VERSION)" -m $(VERSION)

.PHONY: major
major: ## release a new major
	$(MAKE) release INCREMENT='major'

.PHONY: minor
minor: ## release a new minor
	$(MAKE) release INCREMENT='minor'

.PHONY: patch
patch: ## release a new patch
	$(MAKE) release INCREMENT='patch'

.DEFAULT_GOAL := help
LOCAL_BUILD_DIR := build

.PHONY: help
help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: generator-run
generator-run:
	@mkdir -p $(LOCAL_BUILD_DIR)
	@cd $(LOCAL_BUILD_DIR); yo --no-insight ../generators/app/

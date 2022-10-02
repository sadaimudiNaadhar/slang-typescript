.PHONY: build watch clean install
default: build

BUILD_PATH='build/'
INSTALL_DIR=./node_modules/typescript/bin/
LINT=./node_modules/eslint/bin/eslint.js
TSC=$(INSTALL_DIR)tsc
ENTRY=$(pwd)$(BUILD_PATH)index.js

install:
	npm ci

build: lint
	$(TSC)

watch:
	$(TSC) --watch

clean:
	rm -rf ./build

output: build
	node $(ENTRY)

lint:
	$(LINT) ./src/


	


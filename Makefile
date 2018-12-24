install: install-deps install-flow-typed

start:
	npx babel-node -- src/bin/brain-games.js

run:
	npx babel-node -- 'src/bin/hexlet.js' 10

install-deps:
	npm install

install-flow-typed:
	npx flow-typed install

build:
	rm -rf dist
	npm run build

test:
	npm test

check-types:
	npx flow

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test 

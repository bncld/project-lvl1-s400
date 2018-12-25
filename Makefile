install: install-deps

start:
	npx babel-node -- src/bin/brain-games.js

install-deps:
	npm install

lint: 
	npx eslint src/

publish:
	npm publish


DEMO_BROWSERIFY = packages/demo-browserify
DEMO_ROLLUP = packages/demo-rollup
DEMO_WEBPACK = packages/demo-webpack
SOURCE = packages/source

all: clean setup web

web: source browserify rollup webpack

source:
	cd $(SOURCE) && yarn release

browserify:
	cd $(DEMO_BROWSERIFY) && yarn release

rollup:
	cd $(DEMO_ROLLUP) && yarn release

webpack:
	cd $(DEMO_WEBPACK) && yarn release

setup:
	yarn install
	yarn lerna bootstrap

clean: clean-source clean-browserify clean-rollup clean-webpack
	rm -rf node_modules

clean-source:
	cd $(SOURCE) && rm -rf node_modules dist

clean-browserify:
	cd $(DEMO_BROWSERIFY) && rm -rf node_modules bundle.js

clean-rollup:
	cd $(DEMO_ROLLUP) && rm -rf node_modules bundle.js

clean-webpack:
	cd $(DEMO_WEBPACK) && rm -rf node_modules bundle.js

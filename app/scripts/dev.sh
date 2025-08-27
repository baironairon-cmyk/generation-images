#!/usr/bin/env bash
set -euo pipefail

export NODE_OPTIONS=${NODE_OPTIONS:-""}
export TS_NODE_TRANSPILE_ONLY=1

nodemon --watch src --ext ts --exec "node --loader ts-node/esm src/index.ts"
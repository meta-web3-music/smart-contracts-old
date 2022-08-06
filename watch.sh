#!/bin/bash
task () {
	ETHEREUM_RPC_URL="" yarn deploy:local;
	cd subgraph && yarn deploy-local -l v0.0.3 && cd -
}

task
while inotifywait -e modify ./contracts ./scripts ./subgraph/*; do
	task
done
#!/bin/bash
ETHEREUM_RPC_URL="" NETWORK=localhost yarn deploy;
cd subgraph && yarn codegen && yarn remove-local && yarn create-local && yarn deploy-local -l v0.0.3 2>&1
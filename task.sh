#!/bin/bash
ETHEREUM_RPC_URL="" NETWORK=localhost yarn deploy;
cd subgraph && yarn codegen && yarn deploy-local -l v0.0.3 1>/dev/null
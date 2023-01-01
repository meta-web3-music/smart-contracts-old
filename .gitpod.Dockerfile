FROM gitpod/workspace-full
RUN npm install -g ganache-cli hardhat @graphprotocol/graph-cli
RUN sudo apt install inotify-tools -y
RUN mkdir /home/gitpod/graph-docker && cd /home/gitpod/graph-docker && \
    wget https://raw.githubusercontent.com/meta-web3-music/thegraphnode/main/docker-compose.yml
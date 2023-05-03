#!/bin/bash

BASE_DIR=$(cd $(dirname $0); pwd)
cd ${BASE_DIR}

BUILD_FILE=dist.tar.gz

source ~/.bash_profile

rm -rf dist
tar xzf ${BUILD_FILE}
rm ${BUILD_FILE}

sudo systemctl restart nginx

#!/usr/bin/env bash

DOWNLOAD_URL=$(curl -sL curl -sL https://api.github.com/repos/vector-im/element-web/releases/latest | jq -r '[.assets[].browser_download_url][0]')

curl -sL "$DOWNLOAD_URL" | tar xvz - --strip-components=1 -C public

rm public/config.sample.json
cp config.json public/config.json

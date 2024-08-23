#!/bin/bash

# Install Node.js
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Initialize a new Node.js project
npm init -y

# Install Express.js and csv-parser
npm install express csv-parser

# Verify installation
node -v
npm -v
npm ls express csv-parser
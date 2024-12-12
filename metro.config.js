// @ts-nocheck
// Learn more https://docs.expo.io/guides/customizing-metro
const path = require('path');
const { getDefaultConfig } = require("expo/metro-config");  

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  'atomic_components_explorax': path.resolve(__dirname, 'node_modules/atomic_components_explorax/src'),
};

module.exports = config;

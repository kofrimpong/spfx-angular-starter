'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

const webpack = require('webpack');
const path = require('path');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
        generatedConfiguration.plugins.push(new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)fesm5/, path.join(__dirname, './client')));
        return generatedConfiguration;
    }
});

build.initialize(gulp);

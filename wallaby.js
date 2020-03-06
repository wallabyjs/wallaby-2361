"use strict";
process.env.BABEL_ENV = "test";
module.exports = function (wallaby) {
    return {
        files: [
            "package.json",
            "tsconfig.json",
            "setup-jest.js",
            "fileMock.js",
            "!**/*.spec.ts"
          ],

        tests: [
          "**/*.spec.ts"
        ],

        debug: false,

        // preprocessors: {
        //     'Capish.Reflect.Web/Content/**/*.js?(x)': file =>
        //         require("@babel/core")
        //             .transform(file.content, {
        //                 sourceMap: true,
        //                 compact: false,
        //                 babelrc: true,
        //                 filename: file.path
        //             })
        //     ,
        //     'Capish.Reflect.ConfigurationBuilders/**/*.js?(x)': file =>
        //         require("@babel/core")
        //             .transform(file.content, {
        //                 sourceMap: true,
        //                 compact: false,
        //                 babelrc: true,
        //                 filename: file.path
        //             })
        // },
        env: {
            type: "node",
            runner: "node"
        },
        testFramework: "jest"
    };
};
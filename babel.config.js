module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        "@babel/plugin-proposal-export-default-from",
        "@babel/plugin-syntax-dynamic-import",
    ]
}

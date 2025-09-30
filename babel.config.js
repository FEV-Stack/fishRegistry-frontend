module.exports = {
    presets: [
        "@babel/preset-env",
        "@babel/preset-typescript",
        "@babel/preset-react",
    ],
    transform: {
        "^.+\\.(t|j)sx?$": "babel-jest",
    },
    testEnvironment: "jsdom",
};

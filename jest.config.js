module.exports = {
  "moduleFileExtensions": [
      "ts",
      "js"
    ],
    "transform": {
      "^.+\\.ts$": "ts-jest"
    },
    "globals": {
      "ts-jest": {
        "tsConfig": "tsconfig.json"
      }
    },
    "moduleNameMapper": {
      "^@src/(.+)": "<rootDir>/src/$1"
    },
    "testMatch": [
      "**/tests/*.test.ts"
    ]
}

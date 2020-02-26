module.exports = {
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "/lib/", "/esm/"],
  coverageReporters: ["lcov"],
  roots: ["<rootDir>/pages", "<rootDir>/__tests__"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  verbose: true,
  moduleDirectories: ["node_modules"]
};

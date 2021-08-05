import { Config } from "@jest/types";
import path from "path";

const ignorePatterns = [
  "<rootDir>/.changeset",
  "<rootDir>/.git",
  "<rootDir>/.github",
  "<rootDir>/.vscode",
  "<rootDir>/node_modules",
  "<rootDir>/coverage",
  "<rootDir>/dist",
];

const rootDir = path.resolve(__dirname, "..");

const baseConfig: Config.InitialOptions = {
  preset: "ts-jest",
  rootDir,
  setupFiles: ["<rootDir>/config/jest.setup.ts"],
  testEnvironment: "node",
  testPathIgnorePatterns: ignorePatterns,
  verbose: true,

  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/**/*.ts"],
  coveragePathIgnorePatterns: ignorePatterns,

  watchPathIgnorePatterns: ignorePatterns,
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],

  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
    },
  },
};

const projects: Config.InitialOptions[] = [
  {
    ...baseConfig,
    displayName: { name: "Source", color: "cyan" },
    testMatch: ["<rootDir>/src/**/*.test.ts"],
    collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  },
  {
    ...baseConfig,
    displayName: { name: "Tools", color: "magenta" },
    testMatch: ["<rootDir>/!(src)/**/*.test.ts"],
    collectCoverageFrom: ["<rootDir>/!(src)/**/*.ts"],
  },
];

const config: Config.InitialOptions = {
  ...baseConfig,
  // projects,
};

export default config;

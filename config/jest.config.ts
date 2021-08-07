// TODO Rework how tests work in the monorepo
// workspace tests, package tests, ci, watch mode, package focus...

import { Config } from "@jest/types";
import path from "path";

const ignorePatterns = [
  "<rootDir>/.git",
  "<rootDir>/.github",
  "<rootDir>/.yarn",
  "<rootDir>/coverage",
  "<rootDir>/build",
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

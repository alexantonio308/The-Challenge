import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },

  e2e: {
    experimentalStudio: true,
    baseUrl: 'http://localhost:4200',
    defaultCommandTimeout: 60000
  },
});

import { defineConfig } from "cypress";


export default defineConfig({
  e2e: {
    specPattern: "**/*.{feature,features,cy.tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
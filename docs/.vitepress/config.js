const path = require("path")

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  // base: "/v-network-graph/",
  title: "v-network-graph",
  description: "An interactive network graph visualization library for Vue 3",
  themeConfig: {
    nav: [
      { text: "Getting Started", link: "/getting-started" },
      {
        text: "Examples ",
        link: "/examples/",
        activeMatch: "^/examples",
      },
      {
        text: "GitHub",
        link: "https://github.com/dash14/v-network-graph",
      },
    ],
    sidebar: [
      { text: "Getting Started", link: "/getting-started" },
      {
        text: "Examples",
        link: "/examples/",
        children: [
          { text: "Basic Usage", link: "/examples/basic" },
          { text: "Handle Events", link: "/examples/handle_events" }
        ],
      },
      { text: "Reference", link: "/reference" },
    ],
  },
  markdown: {
    lineNumbers: true
  },
  vite: {
    resolve: {
      alias: {
        // avoid conflicts with vitepress/node_modules/*
        "@vue": path.resolve(__dirname, "../../node_modules/@vue"),
      }
    }
  }
}

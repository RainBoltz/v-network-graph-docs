<script setup lang="ts">
import * as vNG from "v-network-graph"
import data from "./data"

const paths: vNG.Paths = [
  { edges: ["edge1", "edge3", "edge5"] },
  { edges: ["edge2", "edge4", "edge6"] },
]

const configs = vNG.defineConfigs({
  node: {
    normal: {
      type: "circle",
      radius: 20,
      color: "#99ccff",
    },
    hover: {
      color: "#88bbff",
    },
    label: {
      visible: false,
      fontSize: 8,
    },
  },
  edge: {
    gap: 40,
    normal: {
      color: "#6699cc",
    },
    type: "curve",
  },
  path: {
    visible: true,
    curveInNode: true,
    path: {
      width: 10,
    },
  },
})
</script>

<template>
  <v-network-graph
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :paths="paths"
    :configs="configs"
  />
</template>

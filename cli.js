#!/usr/bin/env node
const React = require("react")
const importJsx = require("import-jsx")
const { render } = require("ink")

const { getPackageScripts } = require("./src/lib/strip")

const App = importJsx("./src/components/App")

renderScripts()

async function renderScripts() {
  const scripts = await getPackageScripts()
  render(scripts && React.createElement(App, { scripts }))
}

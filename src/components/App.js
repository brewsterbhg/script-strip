const React = require("react")
const PropTypes = require("prop-types")
const { useInput, useApp, Static } = require("ink")
const { useState } = React

const ScriptList = require("./ScriptList")
const QUIT = "q"

const App = ({ scripts }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { exit } = useApp()

  const handleInput = useInput((input, key) => {
    let idx = currentIndex
    if (input === QUIT) {
      exit()
    }
    if (key.upArrow) {
      if (currentIndex > 0) {
        setCurrentIndex(--idx)
      }
    }
    if (key.downArrow) {
      if (currentIndex < Object.keys(scripts).length) {
        setCurrentIndex(++idx)
      }
    }
    if (key.return) {
      // handle select logic
    }
  })

  return (
    <div onKeyDown={handleInput}>
      <Static>SCRIPT STRIP</Static>
      <ScriptList scripts={scripts} currentIndex={currentIndex} />
    </div>
  )
}

App.propTypes = {
  scripts: PropTypes.object.isRequired,
}

App.defaultProps = {
  scripts: {},
}

module.exports = App

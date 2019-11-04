const React = require('react')
const PropTypes = require('prop-types')
const { Text } = require('ink')

const App = ({ scripts }) => {
  return <Text>Test</Text>
}

App.propTypes = {
  scripts: PropTypes.object,
}

module.exports = App

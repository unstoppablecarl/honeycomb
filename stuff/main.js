const Honeycomb = require('../src/honeycomb')
const SVG = require('./svg.js')

const draw = SVG(document.body)

const hexPrototype = {
  size: 50,
}

const BaseHexFactory = Honeycomb.extendHex(hexPrototype)


// get the corners of a hex (they're the same for all hexes created with the same Hex factory)
const corners = BaseHexFactory().corners()
// an SVG symbol can be reused
let hexPolygon = corners.map(({ x, y }) => `${x},${y}`)

const Hex = function(xOrProps, y, customProps = {}) {

  let hex = BaseHexFactory(xOrProps, y, customProps)

  const point = hex.toPoint()
  const hexCenter = hex.center()
  const center = {
    x: point.x + hexCenter.x,
    y: point.y + hexCenter.x,
  }

  let hexagon = draw.polygon(hexPolygon)
    .translate(point.x, point.y)
    .stroke({ width: 1, color: '#999' })

  const text = draw.text('')
    .translate(center.x, center.y)

  text.font({ anchor: 'middle' })

  Object.assign(hex, {
    _color: null,
    _text: null,
    svg: {
      hexagon,
      text,
    },
  })

  Object.defineProperty(hex, 'color', {
    set: function(value) {
      this._color = value
      this.svg.hexagon.fill(value)
    },
    get() {
      return this._color
    },
  })

  Object.defineProperty(hex, 'text', {
    set: function(value) {
      this._text = value
      this.svg.text.text(value)
    },
    get() {
      return this._text
    },
  })

  hex.color = '#fff'
  hex.text = hex.x + ',' + hex.y

  return hex
}

const Grid = Honeycomb.defineGrid(Hex)
const grid = Grid.rectangle({ width: 10, height: 10 })

let hex = grid.get({ x: 4, y: 2 })
hex.color = 'green'
hex.text += ' start'

let hex2 = grid.get({ x: 6, y: 2 })
hex2.color = 'red'
hex2.text += ' target'
hex2.target = true

let hex3 = grid.get({ x: 2, y: 3 })
hex3.color = 'red'
hex3.text += ' target'
hex3.target = true

let hex4 = grid.get({ x: 2, y: 4 })
hex4.color = 'red'
hex4.text += ' target'
hex4.target = true

let ring = grid.hexesInRing(hex, 4)

ring.forEach(hex => {
  hex.color = 'yellow'
})

let targets = grid.nearestMatchingHexes(hex, 10, (hex) => {
  console.log(hex.x, hex.y, hex.text)
  return hex.target
})

targets.forEach(hex => {
  hex.color = 'blue'
})
console.log(ring)

document.addEventListener('click', ({ offsetX, offsetY }) => {
  // convert point to hex (coordinates)
  const hexCoordinates = Grid.pointToHex(offsetX, offsetY)
  // get the actual hex from the grid
  let hex = grid.get(hexCoordinates)
  console.log('clicked', hex)
  hex.svg.hexagon.fill('#ff0000')
})


const colors = {
  PortlandOrange: `#ef5a30`,
  PaleCerulean: `#92bae2`,
  Isabelline: `#eeecea`, // White
  Jet: `#302d2e`, // black
  pink: `#f8b3a2`, // pink
}

const alias = {
  text: colors.Isabelline,
  background: colors.Jet,
  primary: colors.PortlandOrange,
  secondary: colors.PaleCerulean,
}

export default { ...colors, ...alias }

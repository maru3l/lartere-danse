const colors = {
  PortlandOrange: `#ef5a30`,
  PaleCerulean: `#92bae2`,
  Isabelline: `#eeecea`,
  Jet: `#302d2e`,
}

const alias = {
  text: colors.Isabelline,
  background: colors.Jet,
  primary: colors.PortlandOrange,
  secondary: colors.PaleCerulean,
}

export default { ...colors, ...alias }

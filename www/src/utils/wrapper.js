// vendors
import { between } from "polished"

export const left = (type = "margin") => {
  if (type === "margin") {
    return {
      marginLeft: between("12.5px", "60px", "375px", "1920px"),
      "@media screen and (min-width: 1920px)": {
        marginLeft: `calc(50vw - ${1920 / 2}px)`,
      },
    }
  }

  if (type === "padding") {
    return {
      paddingLeft: between("12.5px", "60px", "375px", "1920px"),
      "@media screen and (min-width: 1920px)": {
        paddingLeft: `calc(50vw - ${1920 / 2}px)`,
      },
    }
  }
}

export const right = (type = "margin") => {
  if (type === "margin") {
    return {
      marginRight: between("12.5px", "60px", "375px", "1920px"),
      "@media screen and (min-width: 1920px)": {
        marginRight: `calc(50vw - ${1920 / 2}px)`,
      },
    }
  }

  if (type === "padding") {
    return {
      paddingRight: between("12.5px", "60px", "375px", "1920px"),
      "@media screen and (min-width: 1920px)": {
        paddingRight: `calc(50vw - ${1920 / 2}px)`,
      },
    }
  }
}

// export const paddingLeft = () => {
//   return css`
//     padding-left: ${between("0px", "45px", "320px", "1920px")};

//     ${media.greaterThen(1920)} {
//       padding-left: 45px;
//     }
//   `
// }

// export const paddingRight = () => {
//   return css`
//     padding-right: ${between("0px", "45px", "320px", "1920px")};

//     ${media.greaterThen(1920)} {
//       padding-right: 45px;
//     }
//   `
// }

export const bolt = (type = "margin") => {
  if (type === "margin") {
    return {
      maxWidth: "1800px",
      marginLeft: between("12.5px", "60px", "375px", "1920px"),
      marginRight: between("12.5px", "60px", "375px", "1920px"),
      "@media screen and (min-width: 1920px)": {
        marginLeft: "auto",
        marginRight: "auto",
      },
    }
  }

  if (type === "padding") {
    return {
      paddingLeft: between("12.5px", "60px", "375px", "1920px"),
      paddingRight: between("12.5px", "60px", "375px", "1920px"),
      "@media screen and (min-width: 1920px)": {
        paddingLeft: "calc(50vw - 900px)",
        paddingRight: "calc(50vw - 900px)",
      },
    }
  }
}

export default { bolt, left, right }

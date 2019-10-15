export const lessThen = breakpoint =>
  `@media (max-width: ${breakpoint - 0.02}px)`

export const between = (firstBreakpoint, secondBreakpoint) =>
  `@media (min-width: ${firstBreakpoint}px) and (max-width: ${secondBreakpoint -
    0.02}px)`

export const greaterThen = breakpoint => `@media (min-width: ${breakpoint}px)`

export default {
  lessThen,
  between,
  greaterThen,
}

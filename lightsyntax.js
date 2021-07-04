const quiet = {
  '[class~="comment"], [class~="punctuation"]': {
    color: 'rgb(170, 170, 170)',
  },
  '[class~="operator"]': {
    color: 'rgb(119, 119, 119)',
  },
  '[class~="builtin"],[class~="variable"],[class~="constant"],[class~="number"],[class~="char"],[class~="symbol"]':
    {
      color: 'rgb(171, 101, 38)',
    },
  '[class~="function"],[class~="class-name"]': {
    color: 'rgb(170, 55, 49)',
  },
  '[class~="string"]': {
    color: 'rgb(68, 140, 39)',
  },
  '[class~="attr-name"]': {
    color: 'rgb(145, 179, 224)',
  },
  '[class~="tag"]': {
    color: 'rgb(75, 131, 205)',
  },
  '[class~="selector"]': {
    color: 'rgb(122, 62, 157)',
  },
}

module.exports = quiet

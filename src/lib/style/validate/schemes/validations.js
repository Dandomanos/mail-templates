const secureFonts = {
  // Serif Fonts
  georgia: 'Georgia, serif',
  palatino: 'Palatino, "Palatino Linotype", "Book Antiqua", serif',
  palatinolinotype: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
  'palatino linotype': '"Palatino Linotype", "Book Antiqua", Palatino, serif',
  times: 'Times, "Times New Roman", serif',
  timesnewroman: '"Times New Roman", Times, serif',
  'times new roman': '"Times New Roman", Times, serif',
  // Sans-Serif Fonts
  arial: 'Arial, Helvetica, sans-serif',
  arialblack: '"Arial Black", Gadget, sans-serif',
  arialnarrow: '"Arial Narrow", sans-serif',
  'arial narrow': '"Arial Narrow", sans-serif',
  comic: '"Comic Sans MS", cursive, sans-serif',
  comicsans: '"Comic Sans MS", cursive, sans-serif',
  'comic sans': '"Comic Sans MS", cursive, sans-serif',
  copperplate: 'Copperplate, Copperplate Gothic Light, sans-serif',
  copperplategothic: 'Copperplate Gothic Light, Copperplate, sans-serif',
  copperplategothiclight: 'Copperplate Gothic Light, Copperplate, sans-serif',
  'copperplate gothic light': 'Copperplate Gothic Light, Copperplate, sans-serif',
  'copperplate gothic': 'Copperplate Gothic Light, Copperplate, sans-serif',
  gillsans: 'Gill Sans, Gill Sans MT, sans-serif',
  'gill sans': 'Gill Sans, Gill Sans MT, sans-serif',
  impact: 'Impact, Charcoal, sans-serif',
  lucidasans: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
  lucidasansunicode: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
  'lucida sans': '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
  'lucida sans unicode': '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
  tahoma: 'Tahoma, Geneva, sans-serif',
  trebuchet: '"Trebuchet MS", Helvetica, sans-serif',
  trebuchetms: '"Trebuchet MS", Helvetica, sans-serif',
  'trebuchet ms': '"Trebuchet MS", Helvetica, sans-serif',
  verdana: 'Verdana, Geneva, sans-serif',
  helvetica: 'Helvetica, Arial, Verdana, sans-serif',
  century: 'Century Gothic, sans-serif',
  centurygothic: 'Century Gothic, sans-serif',
  'century gothic': 'Century Gothic, sans-serif',
  // Monospace Fonts
  courier: 'Courier, "Courier New", monospace',
  couriernew: '"Courier New", Courier, monospace',
  'courier new': '"Courier New", Courier, monospace',
  lucida: '"Lucida Console", Monaco, monospace',
  lucidaconsole: '"Lucida Console", Monaco, monospace',
  'lucida console': '"Lucida Console", Monaco, monospace',
}

const borderStyle = [
  'solid',
  'dashed',
  'dotted',
  'double',
  'groove',
  'hidden',
  'inset',
  'none',
  'outset',
  'ridge',
  'unset',
  'inherit',
  'initial',
]
const textTransform = ['capitalize', 'inherit', 'initial', 'lowercase', 'none', 'unset', 'uppercase']
const textAlign = ['center', 'end', 'inherit', 'initial', 'justify', 'left', 'right', 'start', 'unset']
const numbers = [...Array(9).keys()].map(item => ((item + 1) * 100).toString())
const fontWeight = numbers.concat(['bold', 'bolder', 'inherit', 'initial', 'lighter', 'normal', 'unset'])
const textDecoration = ['inherit', 'initial', 'line-through', 'none', 'overline', 'underline', 'unset']
const textDecorationStyle = ['dashed', 'dotted', 'double', 'inherit', 'initial', 'solid', 'unset', 'wavy']
const float = { left: 'float: left;', right: 'float: right;', center: 'margin: 0 auto;', none: '' }

module.exports = {
  secureFonts,
  borderStyle,
  textAlign,
  fontWeight,
  textTransform,
  textDecoration,
  textDecorationStyle,
  float
}
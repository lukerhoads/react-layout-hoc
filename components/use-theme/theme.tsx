import Theme from './themes/type'
import lightTheme from './themes/light'

const getPresetStaticTheme = (): Theme => {
  return lightTheme
}

const Themes = {
  getPresetStaticTheme,
}

export default Themes
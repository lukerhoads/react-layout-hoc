import Theme from './type'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

const getPresetStaticTheme = (): Theme => {
  return lightTheme
}

const Themes = {
  getPresetStaticTheme,
}

export default Themes
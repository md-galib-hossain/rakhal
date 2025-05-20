export type ThemeType = "solid" | "gradient"
export type ThemeColor = "light" | "dark" | "purple" | "green" | "blue"

export interface ThemeConfig {
  type: ThemeType
  color: ThemeColor
}

export const themeColors = {
  light: {
    solid: "bg-white text-gray-800",
    gradient: "bg-linear-to-b from-gray-50 to-white text-gray-800",
    border: "border-gray-200",
    hover: "hover:bg-gray-100",
    active: "bg-gray-100",
  },
  dark: {
    solid: "bg-gray-900 text-gray-100",
    gradient: "bg-linear-to-b from-gray-900 to-gray-800 text-gray-100",
    border: "border-gray-700",
    hover: "hover:bg-gray-800",
    active: "bg-gray-800",
  },
  purple: {
    solid: "bg-purple-600 text-white",
    gradient: "bg-linear-to-b from-purple-700 to-purple-600 text-white",
    border: "border-purple-700",
    hover: "hover:bg-purple-700",
    active: "bg-purple-700",
  },
  green: {
    solid: "bg-emerald-600 text-white",
    gradient: "bg-linear-to-b from-emerald-700 to-emerald-600 text-white",
    border: "border-emerald-700",
    hover: "hover:bg-emerald-700",
    active: "bg-emerald-700",
  },
  blue: {
    solid: "bg-sky-600 text-white",
    gradient: "bg-linear-to-b from-sky-700 to-sky-600 text-white",
    border: "border-sky-700",
    hover: "hover:bg-sky-700",
    active: "bg-sky-700",
  },
}

export const getThemeClasses = (config: ThemeConfig) => {
  const { type, color } = config
  return {
    background: themeColors[color][type],
    border: themeColors[color].border,
    hover: themeColors[color].hover,
    active: themeColors[color].active,
  }
}

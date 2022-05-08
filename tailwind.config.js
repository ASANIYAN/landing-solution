module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
      padding: {
        DEFAULT: '0.8rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        color1: '#233D63',
        color2: '#FF7855',
        btn_bg: '#FFE9E5',
        btn_text: '#FF7855',
        btn_bg_hover: '#FF7855',
        paragraph: '#878F9B',
        footer_text: '#7B849B',
        footer_bg: '#F4F6FB'
      }
    },
  },
  plugins: [],
}

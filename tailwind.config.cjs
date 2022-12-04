/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs", "./public/**/.{js,css}"],
  theme: {
    extend: {
      colors: { 
        'body': '#0d1c1c',
        'main-color': '#d4af37',
        'sub-color': '#f60',
        'sub-alt-color': '#dd5800',
        'text-color': '#fff'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      },
      backgroundImage: {
        'pattern-pilih-nama': "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('bgpilihnama.webp')",
        'pattern-pilih-buku': "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('bgpilihbuku.jpg')",
      },
      borderWidth: {
        '1': "border-width: 1px"
      }
    },
  },
  plugins: [],
}

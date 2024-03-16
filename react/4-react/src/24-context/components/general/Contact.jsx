import useThemeContext from '../../hooks/useThemeContext'

export default function Contact () {
  const theme = useThemeContext()

  return (
    <div className='content box' style={theme}>
      <h2>Contact us</h2>
      <p>
        Lorem ipsu Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam, itaque molestiae aut ipsum alias vel magnam ex necessitatibus
        adipisicing elit. Sunt, neque dignissimos hic itaque fugiat nulla
        aliquid amet, saepe perferendis quis voluptatibus ullam sed magni.
        Voluptates assumenda modi deserunt architecto maiores!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id minus
        deleniti error, totam dolore harum animi itaque, pariatur maiores odit
        illum minima velit consequuntur incidunt, consectetur perferendis est
        numquam?
      </p>
    </div>
  )
}

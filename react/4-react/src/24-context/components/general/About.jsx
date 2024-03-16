import useThemeContext from '../../hooks/useThemeContext'

export default function About () {
  const theme = useThemeContext()

  return (
    <div className='content box' style={theme}>
      <h2>About us</h2>
      <p>
        Lorem ipsu Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam, itaque molestiae aut ipsum alias vel magnam ex necessitatibus
        non officiis numquam ut possimus veritatis tenetur temporibus. Doloribus
        blanditiis aperiam sunt?riam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sunt, neque dignissimos hic itaque fugiat nulla
        aliquid amet, saepe perferendis quis voluptatibus ullam sed magni.
        Voluptates assumenda modi deserunt architecto maiores!
      </p>
    </div>
  )
}

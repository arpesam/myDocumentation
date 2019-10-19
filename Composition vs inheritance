// https://medium.com/humans-create-software/composition-over-inheritance-cb6f88070205

const barker = (state) => ({
  bark: () => console.log('Woof, I am ' + state.name)
})

const driver = (state) => ({
  drive: () => state.position = state.position + state.speed
})

const murderRobotDog = (name)  => {
  let state = {
    name,
    speed: 100,
    position: 0
  }
  return Object.assign(
        {},
        barker(state),
        driver(state),
        killer(state)
    )
}
const bruno =  murderRobotDog('bruno')
bruno.bark() // "Woof, I am Bruno"

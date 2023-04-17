export default function AppBar ( emit: any ){

  const doSwitchR = () => {
    emit('switch-right')
  }

  const doSwitchL = () => {
    emit('switch-left')
  }

  return {doSwitchL, doSwitchR}
}


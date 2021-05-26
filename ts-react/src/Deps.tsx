/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState } from 'react'

const Deps: React.FC = () => {
  const [cnt, setCnt] = useState(0)

  const controller1 = useCallback(() => {
    console.log(cnt)
    console.log('1111')
    setCnt(cnt + 1)
  }, [cnt])

  // const controller2 = useCallback(() => {
  //   console.log(cnt)
  //   console.log('2222')
  //   setCnt(cnt + 1)
  // }, [cnt])

  const handler = useCallback(() => {
    controller1()
  }, [controller1])

  return (
    <>
      <h1>{cnt}</h1>
      {/* <button onClick={cnt % 2 ? controller1 : controller2} type='button'>
        click
      </button> */}
      <button onClick={handler} type='button'>
        click
      </button>
    </>
  )
}

export default React.memo(Deps)

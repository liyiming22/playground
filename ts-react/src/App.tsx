import React, { useState } from 'react'
import Select, { OptionValue } from './Select'
// import Select, { OptionValue } from './Select1'
import AscLoading from './AscLoading'
import Deps from './Deps'

const App: React.FC = () => {
  const targets = [
    { value: 'es3', label: 'ECMAScript 3' },
    { value: 'es5', label: 'ECMAScript 5' },
    { value: 'es2015', label: 'ECMAScript 2015' },
    { value: 'es2016', label: 'ECMAScript 2016' },
    { value: 'es2017', label: 'ECMAScript 2017' },
    { value: 'es2018', label: 'ECMAScript 2018' },
    { value: 'es2019', label: 'ECMAScript 2019' },
    // { value: 2019, label: 'ECMAScript 2019' },
  ]

  // const [target, setTarget] = useState('2019')
  const [target, setTarget] = useState<OptionValue>(targets[6].value)

  return (
    <>
      {/* <Select value={target} onChange={(value) => setTarget(value)} /> */}
      <Select options={targets} value={target} onChange={setTarget} />
      <AscLoading />
      <Deps />
    </>
  )
}

export default App

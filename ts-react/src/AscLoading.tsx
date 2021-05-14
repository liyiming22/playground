/* eslint-disable no-debugger */
import React, { useCallback, useState } from 'react'
import { useAsyncLoading } from './hooks/useAsyncLoading'

const mockApi = (): Promise<string> => {
  const wait = Math.random() * 400
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`此次请求共耗时 ${wait}s`)
    }, wait)
  })
}

const AscLoading: React.FC = () => {
  const [mock, loading] = useAsyncLoading(mockApi, 200)
  const [data, setData] = useState('')

  const getData = useCallback(() => {
    mock()
      // eslint-disable-next-line unicorn/prevent-abbreviations
      .then((res) => setData(res))
      .catch((error) => console.log(error))
  }, [mock])

  return (
    <>
      <button type='button' onClick={getData}>
        发起请求
      </button>
      {loading ? <h1>Loading...</h1> : <h1>{data}</h1>}
    </>
  )
}

export default React.memo(AscLoading)

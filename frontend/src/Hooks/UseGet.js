import { message } from "antd"

import { useEffect, useState } from "react"

const UseGet = (url, initialValue) => {
  const [data, setData] = useState(initialValue)
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError(false)

      fetch(url)
        .then((res) => {
          if (res.ok) {
            return res.json()
          } else {
            throw new Error("There was a problem fetching that data")
          }
        })
        .then((res) => {
          setData(res)
          setLoading(false)
        })
        .catch((error) => message.error(error))
    }
    fetchData()
  }, [url, refresh])

  return { data, isLoading, isError, refresh, setRefresh }
}

export default UseGet

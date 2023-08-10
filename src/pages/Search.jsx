import { useEffect } from "react"
import { useState } from "react"

const Search = () => {
      const [ Search , setSearch] = useState("")
      useEffect(() => {
            fetch('${BASE_URL}/name/${Search}')
            .then((res) => res.json())
            .then((data) => console.log(data))
      } , [Search])
  return (
    <>
      <div>
            <input 
            className=" border-black "
            type="text" onChange={(e) => setSearch(e.target.value)}
            value={Search}
            placeholder="enter country" />

      </div>
    </>
  )
}

export default Search;
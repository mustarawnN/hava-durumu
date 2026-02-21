import { useState } from "react"

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (city.trim() === "") return
    onSearch(city)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Şehir adı girin..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Ara</button>
    </form>
  )
}

export default SearchBar
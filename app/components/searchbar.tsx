import React from 'react'
import Image from 'next/image'

const SearchBar = () => {
  const image: string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPRJREFUSEu1lAEOwiAMRdnJ1JOpJ9ObqS/hLw2WAhuQmOFG/vttabe0eG2L9VMEuKaU+F2yCfbPvH/0GqsBELg3RIA1QR7Air+Na/YSFLwJKQFW/PZLEaLesudCSAn4ZLWms1yfVz5fNWMBctUjrqgAqPhuPc4CEAdCKonib1mA0jPSG0MAhRsV1zMZGrNujwBUt64UNQ879psXw0agfKLTkybbC9W6RY0WXVdrZqjRcF92qd4hymJMaM//av75eHbYMWmBdRW5NnPkWm55khbNKd0+FzLSVNH0rkJmAYC7c2kmAIjqsUc7GxAOuyjHh78tj+ALspM/GVK5SjgAAAAASUVORK5CYII="

  return (
    <div className='mag-glass'>
      <img
        alt='Magnifying glass icon for search bar'
        src={image}
        />
    </div>
  )
}

export default SearchBar

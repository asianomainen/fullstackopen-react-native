import FilterRepositories from './FilterRepositories'
import SortingPicker from './SortingPicker'

const ListHeader = ({ sortBy, setSortBy, filter, setFilter }) => {
  return (
    <>
      <FilterRepositories filter={filter} setFilter={setFilter} />
      <SortingPicker sortBy={sortBy} setSortBy={setSortBy} />
    </>
  )
}

export default ListHeader

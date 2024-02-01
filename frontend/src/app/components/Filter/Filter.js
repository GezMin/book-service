import {
    setTitleFilter,
    setAuthorFilter,
    resetFilter,
    setOnlyFavoriteFilter,
    selectTitleFilter,
    selectAuthorFilter,
    selectOnlyFavoriteFilter,
} from '@/app/redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Filter() {
    const dispatch = useDispatch()
    const titleFilter = useSelector(selectTitleFilter)
    const authorFilter = useSelector(selectAuthorFilter)
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

    const handleTitleFilterChange = e => {
        dispatch(setTitleFilter(e.target.value))
    }
    const handleAuthorFilterChange = e => {
        dispatch(setAuthorFilter(e.target.value))
    }

    const handleResetFilter = () => {
        dispatch(resetFilter())
    }

    const handleOnlyFavoriteFilterChange = () => {
        dispatch(setOnlyFavoriteFilter())
    }

    return (
        <div className='block'>
            <h2 className='p-4 mt-4 text-3xl font-bold'>Filter</h2>
            <div className='flex items-center justify-between gap-2'>
                <input
                    value={titleFilter}
                    type='text'
                    placeholder='filter by title...'
                    className='p-2 px-5 mb-4 text-2xl hover:border-cyan-400'
                    onChange={handleTitleFilterChange}
                />
                <input
                    value={authorFilter}
                    type='text'
                    placeholder='filter by author...'
                    className='p-2 px-5 mb-4 text-2xl hover:border-cyan-400'
                    onChange={handleAuthorFilterChange}
                />
                <div className=''>
                    <label>
                        <input
                            type='checkbox'
                            checked={onlyFavoriteFilter}
                            onChange={handleOnlyFavoriteFilterChange}
                        />
                        Only favorite
                    </label>
                </div>
                <button
                    className='p-2 mb-4 text-2xl text-white bg-violet-600 hover:bg-violet-800'
                    onClick={handleResetFilter}
                    type='button'
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Filter

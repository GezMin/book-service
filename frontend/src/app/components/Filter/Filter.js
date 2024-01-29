import {
    setTitleFilter,
    setAuthorFilter,
    resetFilter,
    selectTitleFilter,
    selectAuthorFilter,
} from '@/app/redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Filter() {
    const dispatch = useDispatch()
    const titleFilter = useSelector(selectTitleFilter)
    const authorFilter = useSelector(selectAuthorFilter)

    const handleTitleFilterChange = e => {
        dispatch(setTitleFilter(e.target.value))
    }
    const handleAuthorFilterChange = e => {
        dispatch(setAuthorFilter(e.target.value))
    }

    const handleResetFilter = () => {
        dispatch(resetFilter())
    }

    return (
        <div className='block'>
            <h2 className='p-4 mt-4 text-3xl font-bold'>Filter</h2>
            <div className='flex justify-between gap-2'>
                <input
                    value={titleFilter}
                    type='text'
                    placeholder='filter by title...'
                    className='w-full p-2 px-5 mb-4 text-2xl hover:border-cyan-400'
                    onChange={handleTitleFilterChange}
                />
                <input
                    value={authorFilter}
                    type='text'
                    placeholder='filter by author...'
                    className='w-full p-2 px-5 mb-4 text-2xl hover:border-cyan-400'
                    onChange={handleAuthorFilterChange}
                />
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

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
    deleteBook,
    toggleFavorite,
    selectBooks,
} from '@/app/redux/slices/bookSlice'
import { MdDeleteForever, MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import {
    selectTitleFilter,
    selectAuthorFilter,
    selectOnlyFavoriteFilter,
} from '@/app/redux/slices/filterSlice'

function BookList() {
    const books = useSelector(selectBooks)
    const titleFilter = useSelector(selectTitleFilter)
    const authorFilter = useSelector(selectAuthorFilter)
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)
    const dispatch = useDispatch()
    const countBooksList = books.length
    const countIsFavorite = books.filter(book => book.isFavorite).length

    const deleteBookHandler = id => {
        dispatch(deleteBook(id))
    }

    const toggleFavoriteHandler = id => {
        dispatch(toggleFavorite(id))
    }

    const filteredBooks = books.filter(book => {
        const matchesTitle = book.title
            .toLowerCase()
            .includes(titleFilter.toLowerCase())
        const matchesAuthor = book.author
            .toLowerCase()
            .includes(authorFilter.toLowerCase())
        const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true
        return matchesTitle && matchesAuthor && matchesFavorite
    })

    const highLightMatch = (text, filter) => {
        if (!filter) return text
        const regex = new RegExp(`(${filter})`, 'gi')
        return text.split(regex).map((part, i) =>
            regex.test(part) ? (
                <span className='bg-green-400' key={i}>
                    {part}
                </span>
            ) : (
                part
            ),
        )
    }

    return (
        <div className='flex flex-col items-center justify-center w-full h-full text-black rounded-md bg-stone-200'>
            <div className='relative flex flex-row justify-between w-full p-4 mt-4 text-2xl'>
                <span className='w-full text-3xl bold'>
                    BookList ({countBooksList})
                </span>
                <MdFavorite size={40} className='text-green-500 ' />
                <span className='absolute flex flex-col items-center justify-center w-6 h-6 ml-2 text-sm bg-white border border-green-400 rounded-full right-10 top-3 border-1'>
                    {countIsFavorite}
                </span>
            </div>

            {books.length === 0 ? (
                <p className='p-4 text-2xl italic text-red-500'>
                    Not books avaliable
                </p>
            ) : (
                <ul className='items-center justify-center w-full py-4 mb-2 list-none d-flex'>
                    {filteredBooks.map((book, i) => (
                        <li
                            key={book.id}
                            className={`border-b border-violet-400 px-8 text-left text-2xl  p-2 hover:bg-violet-200 ${
                                i % 2 === 0 ? 'bg-red-100' : 'bg-lime-100'
                            }`}
                        >
                            <div className='flex items-center justify-between'>
                                <span className='w-full'>
                                    {++i}.
                                    {highLightMatch(book.title, titleFilter)} by
                                    <strong>
                                        {highLightMatch(
                                            book.author,
                                            authorFilter,
                                        )}
                                    </strong>{' '}
                                    (
                                    <span className='px-2 italic text-green-600 text-bold'>
                                        {book.source}
                                    </span>
                                    )
                                </span>

                                <span
                                    onClick={() => {
                                        toggleFavoriteHandler(book.id)
                                    }}
                                >
                                    {book.isFavorite ? (
                                        <MdFavorite
                                            size={36}
                                            className='text-green-500 cursor-pointer hover:text-green-700'
                                        />
                                    ) : (
                                        <MdFavoriteBorder
                                            size={36}
                                            className='text-green-500 cursor-pointer hover:text-green-700'
                                        />
                                    )}
                                </span>
                                <span>
                                    <MdDeleteForever
                                        size={36}
                                        onClick={() =>
                                            deleteBookHandler(book.id)
                                        }
                                        className='ml-4 cursor-pointer hover:text-red-500'
                                    />
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default BookList

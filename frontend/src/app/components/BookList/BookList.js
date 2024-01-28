import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteBook } from '@/app/redux/books/actionCreators'
import { MdDeleteForever } from 'react-icons/md'

function BookList() {
    const books = useSelector(state => state.books)
    const dispatch = useDispatch()

    const deleteBookHandler = id => {
        dispatch(deleteBook(id))
    }

    return (
        <div className='block'>
            <h2 className='text-3xl font-bold p-2 mt-4'>BookList</h2>

            {books.length === 0 ? (
                <p className='text-2xl p-4 italic text-red-500'>
                    Not books avaliable
                </p>
            ) : (
                <ul className='list-none d-flex justify-center items-center w-full  py-4 mb-2'>
                    {books.map((book, i) => (
                        <li
                            key={book.id}
                            className={`border-b border-violet-400 px-8 text-left text-2xl  p-2 hover:bg-violet-200 ${
                                i % 2 === 0 ? 'bg-red-100' : 'bg-lime-100'
                            }`}
                        >
                            <div className='flex justify-between items-center'>
                                <span>
                                    {++i}. {book.title} by{' '}
                                    <strong>{book.author}</strong>
                                </span>
                                <span>
                                    <MdDeleteForever
                                        size={36}
                                        onClick={() =>
                                            deleteBookHandler(book.id)
                                        }
                                        className='cursor-pointer hover:text-red-500'
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

'use client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '@/app/redux/books/actionCreators'
import bookData from '@/app/data/books.json'

function BookForm() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()

    const handleAddRandomBook = () => {
        const randomIndex = [Math.floor(Math.random() * bookData.length)]
        const randomBook = bookData[randomIndex]

        const randomBookWithId = {
            ...randomBook,
            id: self.crypto.randomUUID(),
        }
        dispatch(addBook(randomBookWithId))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!title || !author) return
        const book = {
            title,
            author,
            id: self.crypto.randomUUID(),
        }
        dispatch(addBook(book))
        setAuthor('')
        setTitle('')
    }

    return (
        <div className='block'>
            <h2 className='p-4 mt-4 text-3xl font-bold'>Add a New Book</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <div>
                    <label
                        htmlFor='title'
                        className='block p-2 text-2xl text-center'
                    >
                        Title
                    </label>
                    <input
                        id='title'
                        className='w-full p-2 px-5 text-2xl hover:border-cyan-400'
                        type='text'
                        value={title}
                        placeholder='Title'
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label
                        htmlFor='author'
                        className='block p-2 text-2xl text-center'
                    >
                        Author:
                    </label>
                    <input
                        id='author'
                        className='w-full p-2 px-5 text-2xl'
                        type='text'
                        value={author}
                        placeholder='Author'
                        onChange={e => setAuthor(e.target.value)}
                    />
                </div>
                <button
                    type='submit'
                    className='w-full p-2 px-5 my-5 text-2xl text-white border bg-violet-600 hover:bg-violet-700'
                >
                    Add book
                </button>
                <button
                    type='button'
                    onClick={handleAddRandomBook}
                    className='w-full p-2 px-5 my-5 text-2xl text-white border bg-violet-600 hover:bg-violet-700'
                >
                    Add random book
                </button>
            </form>
        </div>
    )
}

export default BookForm

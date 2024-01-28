'use client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '@/app/redux/books/actionCreators'

function BookForm() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()

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
            <h2 className='text-3xl font-bold p-4 mt-4'>Add a New Book</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <div>
                    <label
                        htmlFor='title'
                        className='block text-2xl text-center p-2'
                    >
                        Title
                    </label>
                    <input
                        id='title'
                        className='w-full p-2 text-2xl px-5 hover:border-cyan-400'
                        type='text'
                        value={title}
                        placeholder='Title'
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label
                        htmlFor='author'
                        className='block text-2xl text-center p-2'
                    >
                        Author:
                    </label>
                    <input
                        id='author'
                        className='w-full p-2 text-2xl px-5'
                        type='text'
                        value={author}
                        placeholder='Author'
                        onChange={e => setAuthor(e.target.value)}
                    />
                </div>
                <button
                    type='submit'
                    className='w-full p-2 text-2xl px-5 border bg-violet-600 text-white
                hover:bg-violet-700 my-5'
                >
                    Add book
                </button>
            </form>
        </div>
    )
}

export default BookForm

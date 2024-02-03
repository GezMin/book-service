'use client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { addBook } from '@/app/redux/slices/bookSlice'
import bookData from '@/app/data/books.json'
import createBookWithId from '@/app/utils/createBookWithId'

function BookForm() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()

    const handleAddRandomBook = () => {
        const randomIndex = [Math.floor(Math.random() * bookData.length)]
        const randomBook = bookData[randomIndex]
        dispatch(addBook(createBookWithId(randomBook)))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!title || !author) return
        dispatch(addBook(createBookWithId({ title, author })))
        setAuthor('')
        setTitle('')
    }

    const handleAddRandomViaAPI = async () => {
        try {
            const res = await axios.get('http://localhost:4000/random-book')

            if (res?.data?.title && res?.data?.author) {
                dispatch(addBook(createBookWithId(res.data)))
            }
        } catch (error) {
            console.log('error fetching random book', error)
        }
    }

    return (
        <div className='block'>
            <h2 className='p-4 mt-4 text-3xl font-bold'>Add a New Book</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 px-5'>
                <div>
                    <label
                        htmlFor='title'
                        className='block p-2 text-2xl text-center'
                    >
                        Title
                    </label>
                    <input
                        id='title'
                        className='p-2 text-2xl hover:border-cyan-400'
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
                    className='w-full p-2 px-5 my-3 text-2xl text-white border bg-violet-600 hover:bg-violet-700'
                >
                    Add book
                </button>
                <button
                    type='button'
                    onClick={handleAddRandomBook}
                    className='w-full p-2 px-5 mb-3 text-2xl text-white border bg-violet-600 hover:bg-violet-700'
                >
                    Add random book
                </button>
                <button
                    type='button'
                    onClick={handleAddRandomViaAPI}
                    className='w-full p-2 px-5 mb-3 text-2xl text-white border bg-violet-600 hover:bg-violet-700'
                >
                    Add Random via API
                </button>
            </form>
        </div>
    )
}

export default BookForm

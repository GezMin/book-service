'use client'
import BookForm from './components/BookForm/BookForm'
import BookList from './components/BookList/BookList'
import Filter from './components/Filter/Filter'
import { Provider } from 'react-redux'
import store from './redux/store'

export default function Home() {
    return (
        <Provider store={store}>
            <header className='flex h-16 bg-violet-600 flex-col items-center justify-center '>
                <h1 className='text-3xl font-bold'>Book Library App</h1>
            </header>
            <main className='flex h-screen-full w-100 items-start justify-center'>
                <div className='flex w-1/3  p-5 m-12'>
                    <BookForm />
                </div>
                <div className='flex flex-col w-2/3 p-5 m-12 gap-10'>
                    <Filter />
                    <BookList />
                </div>
            </main>
        </Provider>
    )
}

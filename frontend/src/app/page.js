'use client'
import BookForm from './components/BookForm/BookForm'
import BookList from './components/BookList/BookList'
import Filter from './components/Filter/Filter'
import { Provider } from 'react-redux'
import store from './redux/store'
import Error from './components/Error/Error'

export default function Home() {
    return (
        <Provider store={store}>
            <header className='flex flex-col items-center justify-center h-16 bg-violet-600 '>
                <h1 className='text-3xl font-bold'>Book Library App</h1>
            </header>
            <main className='flex items-start justify-center h-screen-full w-100'>
                <div className='flex w-1/3 p-5 m-12'>
                    <BookForm />
                </div>
                <div className='flex flex-col w-2/3 gap-10 p-5 m-12'>
                    <Filter />
                    <BookList />
                </div>
            </main>
            <Error />
        </Provider>
    )
}

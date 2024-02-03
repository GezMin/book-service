import { clearError, selectErrorMassage } from '@/app/redux/slices/errorSlice'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Error = () => {
    const errorMessage = useSelector(selectErrorMassage)
    const dispatch = useDispatch()

    useEffect(() => {
        if (errorMessage) {
            toast.info(errorMessage)
            dispatch(clearError())
        }
    }, [errorMessage, dispatch])

    return (
        <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    )
}

export default Error

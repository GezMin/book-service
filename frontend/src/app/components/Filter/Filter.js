function Filter() {
    return (
        <div className='block'>
            <h2 className='p-4 mt-4 text-3xl font-bold'>Filter</h2>
            <div>
                <input
                    type='text'
                    placeholder='filter by title...'
                    className='w-full p-2 px-5 mb-4 text-2xl hover:border-cyan-400'
                />
            </div>
        </div>
    )
}

export default Filter

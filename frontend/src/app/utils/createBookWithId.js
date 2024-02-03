const createBookWithId = (book, source) => {
    return {
        ...book,
        source,
        id: self.crypto.randomUUID(),
        isFavorite: false,
    }
}

export default createBookWithId

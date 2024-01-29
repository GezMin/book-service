const createBookWithId = book => {
    return {
        ...book,
        id: self.crypto.randomUUID(),
        isFavorite: false,
    }
}

export default createBookWithId

class SessionController {
    async store(request, response) {
        return response.json({ message: 'sessio'})
    }
}

export default new SessionController();
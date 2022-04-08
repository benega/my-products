export class UnexpectedError extends Error {
    constructor() {
        super('Unexpected error. Try again.')
        this.name = 'UnexpectedError'
    }
}

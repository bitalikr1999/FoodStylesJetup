export class GraphExeption extends Error {
	private error: any

	public get code(): 'GRAPHQL_VALIDATION_FAILED' | 'INTERNAL_SERVER_ERROR' {
		return this.error?.exceptions?.code
	}

	public get message() {
		return this.error?.message
	}

	constructor(errors: any[]) {
		super()

		console.log('error', errors)

		this.error = errors[0]
	}
}

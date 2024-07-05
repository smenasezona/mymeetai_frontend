import { BookSchemaType } from '@/schemas/bookScheme'
import { BookData } from '@/types/bookData'

const BASE_URL = 'http://127.0.0.1:8001'

export async function createBook(bookData: BookSchemaType) {
	const response = await fetch(`${BASE_URL}/books/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(bookData),
	})

	if (!response.ok) {
		throw new Error('Failed to create book')
	}

	return await response.json()
}

export async function getBook(id: number) {
	const response = await fetch(`${BASE_URL}/books/${id}`)
	if (!response.ok) {
		throw new Error(response.statusText)
	}
	return response.json()
}

export async function getAllBooks(skip: number = 0, limit: number = 10) {
	const response = await fetch(`${BASE_URL}/books?skip=${skip}&limit=${limit}`)
	if (!response.ok) {
		throw new Error(response.statusText)
	}
	return response.json()
}

export async function updateBook(id: number, bookData: BookData) {
	const response = await fetch(`${BASE_URL}/books/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(bookData),
	})
}

export async function deleteBook(id: number) {
	const response = await fetch(`${BASE_URL}/books/${id}`, {
		method: 'DELETE',
	})
	if (!response.ok) {
		throw new Error(response.statusText)
	}
	return response.json()
}

import * as yup from 'yup'

export const bookSchema = yup
	.object({
		title: yup.string().required('Название книги обязательно'),
		author: yup.string().required('Имя автора обязательно'),
		genre: yup.string().required('Жанр обязателен'),
		release_date: yup
			.number()
			.required('Год выпуска обязателен')
			.max(new Date().getFullYear(), 'Год не может быть в будущем'),
		description: yup.string().required('Описание обязательно'),
		cover: yup
			.string()
			.url('Должна быть валидная URL-ссылка')
			.required('URL обложки обязателен'),
	})
	.required()

export type BookSchemaType = yup.InferType<typeof bookSchema>

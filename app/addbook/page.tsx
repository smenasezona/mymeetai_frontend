'use client'

import {bookSchema, BookSchemaType} from '@/schemas/bookScheme'
import {createBook} from '@/utils/api'
import {yupResolver} from '@hookform/resolvers/yup'
import {useState} from 'react'
import {useForm} from 'react-hook-form'

export default function AddBook() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<BookSchemaType>({
        resolver: yupResolver(bookSchema),
    })

    const onSubmit = async (data: BookSchemaType) => {
        setIsSubmitting(true)
        setSubmitError(null)
        try {
            await createBook(data)
            reset()
            alert('Книга успешно добавлена! Найс!')
        } catch (error) {
            setSubmitError(
                'Произошла ошибка при добавлении книги :('
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className='container mx-auto p-2 m-2 mt-16 flex flex-col items-center'>
            <div className="relative w-full max-w-lg p-1 border-2 border-amber-400 shadow-md">
                <div
                    className="absolute top-1 left-1 w-3 h-3 border-2 border-amber-400 text-amber-400 flex items-center justify-center text-xs">•
                </div>
                <div
                    className="absolute top-1 right-1 w-3 h-3 border-2 border-amber-400 text-amber-400 flex items-center justify-center text-xs">•
                </div>
                <div className="relative border-2 border-amber-400 p-6">
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                        <div>
                            <label htmlFor='title' className='block mb-1'>
                                Название
                            </label>
                            <input
                                {...register('title')}
                                id='title'
                                className='w-full p-2 border-2 rounded focus:border-amber-400'
                            />
                            {errors.title && (
                                <p className='text-red-500'>{errors.title.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor='author' className='block mb-1'>
                                Автор
                            </label>
                            <input
                                {...register('author')}
                                id='author'
                                className='w-full p-2 border-2 rounded focus:border-amber-400'
                            />
                            {errors.author && (
                                <p className='text-red-500'>{errors.author.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor='genre' className='block mb-1'>
                                Жанр
                            </label>
                            <input
                                {...register('genre')}
                                id='genre'
                                className='w-full p-2 border-2 rounded focus:border-amber-400'
                            />
                            {errors.genre && (
                                <p className='text-red-500'>{errors.genre.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor='release_date' className='block mb-1'>
                                Год выпуска
                            </label>
                            <input
                                {...register('release_date')}
                                id='release_date'
                                type='number'
                                className='w-full p-2 border-2 rounded focus:border-amber-400'
                            />
                            {errors.release_date && (
                                <p className='text-red-500'>{errors.release_date.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor='description' className='block mb-1'>
                                Описание
                            </label>
                            <textarea
                                {...register('description')}
                                id='description'
                                className='w-full p-2 border-2 rounded focus:border-amber-400'
                                rows={4}
                            ></textarea>
                            {errors.description && (
                                <p className='text-red-500'>{errors.description.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor='cover' className='block mb-1'>
                                URL обложки
                            </label>
                            <input
                                {...register('cover')}
                                id='cover'
                                className='w-full p-2 border-2 rounded focus:border-amber-400'
                            />
                            {errors.cover && (
                                <p className='text-red-500'>{errors.cover.message}</p>
                            )}
                        </div>

                        {submitError && <p className='text-red-500'>{submitError}</p>}

                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='w-fit cursor-pointer border-2 border-amber-400 py-2 px-4 hover:bg-amber-400 transition duration-300'
                        >
                            {isSubmitting ? 'Добавление...' : 'Добавить книгу'}
                        </button>
                    </form>
                    <div
                        className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-2 border-amber-400  text-amber-400 flex items-center justify-center">•
                    </div>
                    <div
                        className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-2 border-amber-400 text-amber-400 flex items-center justify-center ">•
                    </div>
                </div>
            </div>
        </main>
    )
}

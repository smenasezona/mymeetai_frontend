import React from "react";

const About = () => {
    return (
        <main className="flex items-center justify-center p-4 mt-16">
            <div className="relative w-1/3 p-1 border-2 border-amber-400 ">
                <div
                    className="absolute top-1 left-1 w-3 h-3 border-2 border-amber-400 text-amber-400 flex items-center justify-center text-xs">•
                </div>
                <div
                    className="absolute top-1 right-1 w-3 h-3 border-2 border-amber-400 text-amber-400 flex items-center justify-center text-xs">•
                </div>
                <div className="relative border-2 border-amber-400 p-4">
                    <div className={'flex flex-col'}>
                        <span className={'text-gray-700 text-lg pb-2'}>Проект был выполнен в рамках тестового задания компании <a
                            href="https://mymeet.ai/ru?ysclid=ly97khprqw989194161"
                            target={"_blank"}
                            className={'text-pink-600'}>mymeet.ai</a> </span>
                        <span className={'text-gray-700 text-lg pb-2'}>
                            Проект выполнил <a
                            href="https://drive.google.com/file/d/1V0cguPiYmZybYmp1vwcPdThwQBwk2T_d/view?usp=sharing"
                            target={"_blank"}
                            className={'text-pink-600'}>Кияшко Артём</a>
                        </span>
                        <span className={'text-gray-700 text-lg pb-2'}>
                            Проект включает в себя backend часть (Python, FastAPI, MongoDB), а также frontend часть (Next.js, Typescript, Tailwind, React-hook-form, yup).
                        </span>
                        <span className={'text-gray-700 text-lg pb-2'}>
                            Все книги были взяты из личной библиотеки.
                        </span>
                        <span className={'text-gray-700 text-lg pb-2'}>
                            Код фронтенда: <a target={"_blank"}
                                              className={'text-pink-600'}
                                              href="https://github.com/smenasezona/mymeetai_frontend.git">Тык</a>
                        </span>
                        <span className={'text-gray-700 text-lg pb-2'}>
                            Код бекенда: <a target={"_blank"}
                                            className={'text-pink-600'}
                                            href="https://github.com/smenasezona/mymeetai_backend.git">Тык</a>
                        </span>
                        <span className={'text-gray-700 text-lg pb-2'}>
                            Хорошего вам дня, спасибо за внимание :)
                        </span>
                    </div>
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

export default About

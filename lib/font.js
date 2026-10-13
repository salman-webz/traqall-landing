import { Public_Sans, Exo } from 'next/font/google'

export const publicSans = Public_Sans({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--billdins-font",
    display: 'swap',
})

export const exo = Exo({
    weight: ['400', '500', '600', '700',],
    subsets: ['latin'],
    variable: "--billdins-font-two",
    display: 'swap',
})

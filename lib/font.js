import localFont from 'next/font/local'

export const publicSans = localFont({
    src: '../public/assets/fonts/site/public-sans-latin-variable.woff2',
    weight: '400 900',
    style: 'normal',
    variable: '--billdins-font',
    display: 'swap',
})

export const exo = localFont({
    src: '../public/assets/fonts/site/exo-latin-variable.woff2',
    weight: '400 700',
    style: 'normal',
    variable: '--billdins-font-two',
    display: 'swap',
})

import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/bildins.css"
import "react-phone-number-input/style.css"
import "../public/assets/css/theme-overrides.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { publicSans, exo } from '@/lib/font'
export const metadata = {
    title: 'TraqAll | We Manage Your Mess',
    description: 'TraqAll is a construction field-operations platform for timecards, equipment, materials, small tools, and issues.',
    icons: {
        icon: [
            { url: '/assets/images/favicons/favicon.ico?v=traqall', sizes: 'any' },
            { url: '/assets/images/favicons/favicon-16x16.png?v=traqall', sizes: '16x16', type: 'image/png' },
            { url: '/assets/images/favicons/favicon-32x32.png?v=traqall', sizes: '32x32', type: 'image/png' }
        ],
        apple: '/assets/images/favicons/apple-touch-icon.png?v=traqall'
    },
    manifest: '/assets/images/favicons/site.webmanifest'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${publicSans.variable} ${exo.variable}`}>
            <body>{children}</body>
        </html>
    )
}

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.scss'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import SessionProvider from './SessionProvider';


export const metadata = {
    title: 'Ad Covilhã'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <SessionProvider>
                <body>
                    <Header />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </body>
            </SessionProvider>
        </html>
    )
}
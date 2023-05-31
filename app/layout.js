import './globals.css'
import { Inter } from 'next/font/google'
import { Lato } from 'next/font/google'
import MenuNav from './Componentes/MenuNav'


const lato  = Lato(
  {subsets: ['latin'], weight: ['100', '300', '400', '700', '900'],}

)
export const metadata = {
  title: 'HuilaTour',
  description: 'informacion turistica del departamento del huila',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <MenuNav/>
        {children}</body>
    </html>
  )
}

import './globals.css'

export const metadata = {
  title: 'Esi Projects',
  description: 'a project that showcases the projects made by esi students',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

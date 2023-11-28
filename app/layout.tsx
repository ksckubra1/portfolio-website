
import Footer from './components/Footer'
import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden flex flex-col bg-[#ECECEC]'>
        <div className="">
          {children}
          <Footer />
        </div>
      </body>

    </html>
  )
}

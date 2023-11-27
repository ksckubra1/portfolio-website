import About from './components/About'
import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='' lang="en">
      <body className='flex flex-col'>
        <div className="">{children}</div>
        <div className="">
          <About />
        </div>
      </body>

    </html>
  )
}

import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'
import BuyCoffeeWidget from './components/BuyCoffeeWidget'
// import CoffeeButton from './components/BuyCoffeeButton'

export const metadata = {
  title: "Cooper Wallace's Blog",
  description: 'Blog posting app for projects!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800'>
        <Navbar />
        <MyProfilePic />
        {children}
        <BuyCoffeeWidget />
      </body>
    </html>
  )
}

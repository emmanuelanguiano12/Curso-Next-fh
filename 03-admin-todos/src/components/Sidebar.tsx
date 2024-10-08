import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiBookmarkCheck, CiLogout } from 'react-icons/ci'
import { SidebarItem } from './SidebarItem'
import { IoBasketOutline, IoCalendarOutline, IoCheckboxOutline, IoGameControllerOutline, IoListOutline, IoPersonOutline } from 'react-icons/io5'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { LogOutButton } from './LogOutButton'

const menuItems = [
  {
    icon: <IoCalendarOutline />,
    path: '/dashboard',
    title: 'Dashboard'
  },
  {
    icon: <IoCheckboxOutline />,
    path: '/dashboard/rest-todos',
    title: 'Rest TODOS'
  },
  {
    icon: <IoListOutline />,
    path: '/dashboard/server-todos',
    title: 'Server Actions'
  },
  {
    icon: <IoGameControllerOutline />,
    path: '/dashboard/cookies',
    title: 'Cookies'
  },
  {
    icon: <IoBasketOutline />,
    path: '/dashboard/products',
    title: 'Productos'
  },
  {
    icon: <IoPersonOutline />,
    path: '/dashboard/profile',
    title: 'Perfil'
  },
]

export const Sidebar = async() => {

    const session = await getServerSession(authOptions)

    if(!session){
      redirect('/api/auth/signin');
    }
    // const role = 

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            {/* TODO: Next/Link hacia dashboard */}
            <Link href="/dashboard" title="home">
              {/* Next/Image */}
              <Image width={32} height={32} src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" className="w-32" alt="tailus logo"/>
            </Link>
          </div>

          <div className="mt-8 text-center">
            {/* Next/Image */}
            <Image width={100} height={100} src={session?.user?.image!} alt={session.user?.name!} className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"/>
              <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{session?.user?.name ?? "No name"}</h5>
              <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            {
              menuItems.map(menuItem => (
                <SidebarItem key={menuItem.path} {...menuItem} />
              ))
            }
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <LogOutButton />
        </div>
      </aside>
  )
}

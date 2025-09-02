import { Outlet } from 'react-router'
import TopNavBar from '../components/client/LayoutClient/TopNavBar'

export default function LayoutClient() {
    return (
        <div className='w-full min-h-screen text-zinc-50'>
            <TopNavBar />
            <Outlet />
        </div>
    )
}

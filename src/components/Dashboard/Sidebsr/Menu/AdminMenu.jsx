import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'
import { FaUsers } from 'react-icons/fa6'

const AdminMenu = () => {
    return (
        <>
            <MenuItem icon={FaUserCog} label='Manage Requests' address='manage-requests' />

            <MenuItem icon={FaUsers } label='Manage Users' address='manage-users' />

        </>
    )
}

export default AdminMenu

import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'
import { GrNotes } from 'react-icons/gr'

const AdminMenu = () => {
    return (
        <>
            <MenuItem icon={GrNotes} label='Loan Applications' address='loan-applications' />
            <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />

        </>
    )
}

export default AdminMenu

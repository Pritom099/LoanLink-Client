import { GrNotes } from 'react-icons/gr'
import MenuItem from './MenuItem'
import { FaDollarSign } from 'react-icons/fa6'

const CustomerMenu = () => {


  return (
    <>
      <MenuItem icon={FaDollarSign} label='My Loans' address='my-loans' />
      <MenuItem icon={GrNotes} label='Loan Applications' address='loan-applications' />
    </>
  )
}

export default CustomerMenu

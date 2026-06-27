
import AdminStatistics from "../../../components/Dashboard/Statistics/AdminStatistics";
import CustomerStatistics from "../../../components/Dashboard/Statistics/CustomerStatistics";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";
import useRole from "../../../hooks/useRole";


const Dashboard = () => {
    const [role, isRoleLoading] = useRole();

    if (isRoleLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div>
            {
                role === 'admin' ? (
                    <AdminStatistics></AdminStatistics>
                ) : (
                    <CustomerStatistics></CustomerStatistics>
                )
            }
        </div>
    );
};

export default Dashboard;
import { Table } from "antd";
import { MdBlockFlipped } from "react-icons/md";
import { useBlockUserMutation, useGetAllUserQuery } from "../../redux/Api/dashboardApi";
import { imageUrl } from "../../redux/Api/baseApi";
import { toast } from "sonner";
const UserDetailsTable = ({ search }) => {
    const { data: getAllUser, isLoading } = useGetAllUserQuery({ search })
    const [blockUser] = useBlockUserMutation()
    
    const columns = [
        {
            title: 'S. No.',
            dataIndex: 'sno',
            key: 'sno',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={record?.img} alt="user" style={{ width: 30, height: 30, marginRight: 8 }} />
                    {text}
                </div>
            ),
        },
        {
            title: 'Member Since',
            dataIndex: 'memberSince',
            key: 'memberSince',
        },
        {
            title: 'Membership Type',
            dataIndex: 'membershipType',
            key: 'membershipType',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Contact Number',
            dataIndex: 'contactNumber',
            key: 'contactNumber',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_, render) => (
                <div onClick={() => handleBlockUser(render?.key)} className={`cursor-pointer   ${render?.isBlock ? "text-red-500" : 'text-gray-500'}`}>
                    <MdBlockFlipped size={20} />
                </div>
            ),
        },
    ];

    /** handle block user  */
    const handleBlockUser = (id) => {
        blockUser(id).unwrap()
            .then((payload) => {
                toast.success(payload?.message)
            })
            .catch((error) => toast.error(error?.data?.message));
    }

    const formattedTableData = getAllUser?.data?.map((user, i) => {
        return {
            key: user?._id,
            sno: i + 1,
            name: user?.name,
            img: `${imageUrl}${user?.profile_image}`,
            memberSince: user?.createdAt?.split("T")[0],
            membershipType: user?.userType,
            email: user?.email,
            contactNumber: user?.phone_number,
            location: user?.address || 'Not Available',
            isBlock : user?.is_block
        }
    })


    // Columns data




    return (
        <div className="p-2 ">

            <Table
                columns={columns}
                dataSource={formattedTableData}
                pagination={{
                    pageSize: 5,
                    showTotal: (total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`,
                    locale: {
                        items_per_page: '',
                        prev_page: 'Previous',
                        next_page: 'Next',
                    },
                }}
                className="custom-pagination"
            />

        </div>
    )
}

export default UserDetailsTable;
import { Table } from "antd";
import React from "react";
import { LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";


const JoinRequest = ({ tableData, pagination }) => {

  const columns = [
    {
      title: "Sl No.",
      dataIndex: "key",
      className: "font-lora",
      key: "key",
    },
    {
      title: "Name",
      className: "font-lora",
      dataIndex: "name",
      key: "name",
      render: (_, record) => {
        return (
          <div className="start-center gap-2">
            <img
              src={record?.img}
              className="w-[40px] h-[40px] rounded-[8px]"
              alt=""
            />
            <div>
              <p className="font-medium font-lora">{record?.name}</p>
              <p className="text-sm font-lora">{record?.contact}</p>
            </div>
          </div>
        );
      },
    },
    {
      title: "Car",
      className: "font-lora",
      dataIndex: "car",
      key: "car",
      render: (_, record) => {
        return (
          <div className="start-center gap-2">
            <img
              src={record?.carImg}
              className="w-[40px] h-[40px] rounded-[8px]"
              alt=""
            />
            <div>
              <p className="font-medium font-lora">{record?.car}</p>
              <p className="text-sm font-lora">{record?.carLocation}</p>
            </div>
          </div>
        );
      },
    },
    {
      title: "Email",
      className: "font-lora",
      dataIndex: "email",
      key: "email  ",
    },

    ,

    {
      title: "Location",
      dataIndex: "location",
      key: "location  ",
    },

     {
      title: "Actions",
      dataIndex: "key",
      key: "actions",
      className: "font-lora flex justify-center",
      render: (_, record) => {
        return (
          <div className="flex justify-center gap-2">
            <Link 
              to={`/request-host-details/${record.id}`} 
              className="px-6 py-2 rounded-3xl flex items-center font-semibold border text-white bg-[#001D4E] hover:text-white"
            >
              <LuEye size={25} />
            </Link>
            {'pending' && (
              <>
                <button 
                  className="px-6 py-2 rounded-3xl font-semibold border text-white bg-[#34C759] hover:text-white"
                  // Add onClick handler for approval
                >
                  Approve
                </button>
                <Link className="px-6 py-2 rounded-3xl text-red-500 font-semibold  border border-red-500 hover:bg-red-500 hover:text-white">
              Cancel
            </Link>
              </>
            )}
          </div>
        );
      },
    },
  ];
  return (
    <div className="font-lora rounded-md ">
      <Table dataSource={tableData} columns={columns} className="custom-pagination font-lora" pagination={pagination
        //   {
        //   pageSize: 5,
        //   showTotal: (total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`,
        //   locale: {
        //     items_per_page: '',
        //     prev_page: 'Previous',
        //     next_page: 'Next',
        //   },
        // }
      } />

    </div>
  );
};

export default JoinRequest;

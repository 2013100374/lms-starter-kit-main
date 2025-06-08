import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "../../../../components/dashboard/Tables/TableHeader";
import { getAllUsers } from "@/actions/users";

export default async function page() {
  const users = (await getAllUsers()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Users"
        linkTitle="Add User"
        href="/register"
        data={users}
        model="user"
        showImport={false}
      />
      <div className="py-8">
        <DataTable
          searchPlaceholder="Search name,phone,email"
          data={users}
          columns={columns}
        />
      </div>
    </div>
  );
}

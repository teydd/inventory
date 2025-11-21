import Sidebar from "@/components/sidebar";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import React from "react";

export default async function Inventory({}) {
  const user = getCurrentUser();
  const userId = user.id;
  const totalProducts = await prisma.product.findMany({ where: { userId } });
  return (
    <>
      <div className="min-h-screen ">
        <Sidebar currentPath="inventory"></Sidebar>
        <main className="ml-64 p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Inventory
                </h1>
                <p className="text-sm text-gray-500">
                  Manage your products and track inventory levels
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-cyan-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-cyan-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 upercase">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 upercase">
                      SKU
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 upercase">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 upercase">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 upercase">
                      Low Stock
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 upercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className=" bg-white divide-y divide-gray-200">
                  {totalProducts.map((product, key) => (
                    <tr className="hover:bg-cyan-500" key={key}>
                      <td className="px-6 py-4 text-sm text-gray-500 ">
                        {product.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 ">
                        {product.SKU || "-"}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 ">
                        ${Number(product.price).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 ">
                        {product.quantity}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 ">
                        {product.lowStockAt || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

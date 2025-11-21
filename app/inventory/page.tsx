import Sidebar from '@/components/sidebar'
import React from 'react'

export default async function Inventory({}) {
  return (
    <>
    <div className="min-h-screen ">
        <Sidebar currentPath='inventory'></Sidebar>
        <main className="ml-64 p-8">
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className='text-2xl font-semibold text-gray-900'>Inventory</h1>
                        <p className='text-sm text-gray-500'>Manage your products and track inventory levels</p>
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                <div className="bg-white rounded-lg border border-cyan-200 overflow-hidden">
                    <table className='w-full'>
                        <thead className='bg-cyan-50'>
                            <tr>
                                <th>Name</th>
                                 <th>SKU</th>
                                  <th>Price</th>
                                   <th>Quantity</th>
                                    <th>Low Stock</th>
                                     <th>Actions</th>
                            </tr>
                        </thead>                        
                    </table>
                </div>
            </div>
        </main>
    </div>
    </>
  )
}

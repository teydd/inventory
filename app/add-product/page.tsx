import Sidebar from '@/components/sidebar'
import { getCurrentUser } from '@/lib/auth'
import Link from 'next/link'
import React from 'react'

export default async function AddProduct() {
  const user = await getCurrentUser()
  return (
    <div className='min-h-screen bg-cyan-50'>
      <Sidebar currentPath='/add-product'/>

      <main className='ml-64 p-6'>
        <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Add Product
                </h1>
                <p className="text-sm text-gray-500">
                  Add a new product to your inventory
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            <div className='bg-white rounded-lg border border-cyan-200 p-6'>
              <form className='spac-y-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2' htmlFor="name">Product name</label>
                  <input className='w-full px-4 py-2 border border-cyan-300 rounded-lg focus:border-transparent ' type="text" name="name" id="name" placeholder='Enter product name'  required/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2' htmlFor="name">Price</label>
                  <input className='w-full px-4 py-2 border border-cyan-300 rounded-lg focus:border-transparent ' type="number" name="price" id="price" placeholder='0.0'  required step={0.01} min={0}/>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2' htmlFor="quantity">Quantity</label>
                  <input className='w-full px-4 py-2 border border-cyan-300 rounded-lg focus:border-transparent ' type="text" name="quantity" id="name" placeholder='Quantity'  required/>
                </div>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2' htmlFor="sku">SKU (optional)</label>
                  <input className='w-full px-4 py-2 border border-cyan-300 rounded-lg focus:border-transparent ' type="text" name="sku" id="sku" placeholder='Enter SKU'  required/>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2' htmlFor="lowStockAt">Low Stock At</label>
                  <input className='w-full px-4 py-2 border border-cyan-300 rounded-lg focus:border-transparent ' type="lowStockAt" name="lowStockAt" id="lowStockAt" placeholder='0.0'  required step={0.01} min={0}/>
                </div>
                <div className='flex gap-5'>
                  <button type='submit' className='px-5 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700'>Add Product</button>
                  <Link href={"/inventory"} className='px-5 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300'>Cancel</Link>
                </div>
              </form>
            </div>
          </div>
      </main>
    </div>
  )
}

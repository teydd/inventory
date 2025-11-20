import { UserButton } from "@stackframe/stack";
import { BarChart3, Package2, Plus, Settings2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Sidebar({
  currentPath = "/dashboard",
}: {
  currentPath: string;
}) {
  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Inventory", href: "/inventory", icon: Package2 },
    { name: "Add Product", href: "/add-product", icon: Plus },
    { name: "Settings", href: "/settings", icon: Settings2 },
  ];
  return (
    <>
      <div className="fixed left-0 top-0 bg-cyan-900 text-white w-64 min-h-screen p-6">
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <BarChart3 className="w-7 h-7"></BarChart3>
            <span className="text-lg font-semibold">Inventory Management</span>
          </div>
        </div>
        <nav className="space-y-1">
          <div className="text-sm font-semibold text-gray-400 uppercase">
            Inventory
          </div>
          {navigation.map((item, key) => {
            const Icon = item.icon;
            const isActive = currentPath === item.href;
            return (
              <Link
                className={`flex items-center space-x-3 py-2 rounded-xl px-3 ${
                  isActive
                    ? "bg-cyan-100 text-gray-800"
                    : "hover:bg-gray-800 text-gray-300"
                }`}
                href={item.href}
                key={key}
              >
                <Icon className="w-5 h-5"></Icon>
                <span className="text-sm"> {item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <UserButton showUserInfo></UserButton>
          </div>
        </div>
      </div>
    </>
  );
}

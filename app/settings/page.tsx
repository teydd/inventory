import Sidebar from "@/components/sidebar";
import { getCurrentUser } from "@/lib/auth";
import { AccountSettings } from "@stackframe/stack";
import React from "react";

export default async function SettingsPage() {
  const user = await getCurrentUser();
  return (
    <>
      <div className="min-h-screen bg-cyan-50">
        <Sidebar currentPath="/settings"></Sidebar>
        <main className="ml-64 p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Settings
                </h1>
                <p className="text-sm text-gray-500">
                  Manage your account settings and preferences
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-6xl">
            <div className="bg-white rounded-lg border border-cyan-200 p-6">
                <AccountSettings fullPage></AccountSettings>

            </div>
        </div>
        </main>
      </div>
    </>
  );
}

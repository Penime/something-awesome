"use client";

import React from 'react';
import { AuthProvider, useAuth } from '@/hooks/useAuth';
import Button from '@/components/ui/Button';

// A smaller component to handle the auth button logic
const AuthButton = () => {
    const { user, loading, login, logout } = useAuth();

    if (loading) {
        return <div className="text-white">Loading...</div>;
    }

    return user ? (
        <div className="flex items-center space-x-4">
            <span className="text-white">Welcome, {user.displayName}</span>
            <Button onClick={logout}>Logout</Button>
        </div>
    ) : (
        <Button onClick={login}>Login</Button>
    );
};


const Layout = ({ children }) => {
  return (
    <AuthProvider>
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <header className="bg-gray-800 shadow-md">
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-white">Self-Reflection Calendar</h1>
                    <AuthButton />
                </nav>
            </header>
            <main className="container mx-auto px-6 py-8">
                {children}
            </main>
        </div>
    </AuthProvider>
  );
};

export default Layout;

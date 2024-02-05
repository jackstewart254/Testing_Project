"use client";
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { fetchUsers } from '@/api/fetchSupabase/fetchSupabase';

const ContactUs = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
 
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  // fetchUsers()

  return (
    <div className="bg-white h-2/3 w-full">
      <p>ContactUs</p>
      <ul>
        {Array.isArray(data) &&
          data.map((user) => (
            <li key={user.id}>{user.age}</li>
          ))}
      </ul>
    </div>
  );
};

export default ContactUs;


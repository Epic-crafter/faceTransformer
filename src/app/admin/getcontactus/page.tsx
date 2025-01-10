'use client';

import { useEffect, useState } from 'react';

interface Contact {
  _id: string;
  fullName: string;
  email: string;
  telephone: string;
  service: string;
  message: string;
  createdAt: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch contacts data when the component mounts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('/api/contact');
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const data = await response.json();
        if (data.success) {
          setContacts(data.contacts); // Overwrites state with fetched data
        } else {
          setError(data.error || 'An error occurred');
        }
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchContacts();
  }, []); // Empty dependency array ensures this runs once on mount

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Contact List</h1>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact._id}>
              <h3>{contact.fullName}</h3>
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.telephone}</p>
              <p>Service: {contact.service}</p>
              <p>Message: {contact.message}</p>
              <p>Created At: {new Date(contact.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

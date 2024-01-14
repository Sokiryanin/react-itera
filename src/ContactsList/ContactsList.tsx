import React from 'react';
import { ContactCard } from '../ContactsCard/ContactsCard';

interface ContactsListProps {
  users: Array<{ id: number; name: string;  email: string; }>; // замените на ваш реальный тип пользователя
}

export const ContactsList: React.FC<ContactsListProps> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} >
                    <ContactCard user={user} />
        </li>

      ))}
    </ul>
  );
};
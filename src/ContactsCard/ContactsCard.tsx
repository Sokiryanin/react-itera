type ContactCardProps = {
    user: { id: number; name: string; email: string };
  }

  export const ContactCard: React.FC<ContactCardProps> = ({ user }) => {
    return (
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    );
  };
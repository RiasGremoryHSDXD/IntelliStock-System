import { useEffect, useState } from "react";
import supabase from "./supabase-client";

type UserAuth = {
  user_id: number;
  email_auth: string;
  password_auth: string;
  create_at: string; // or Date, depending on your needs
};

const UserAuthentication = () => {
  const [userAuthData, setUserAuthData] = useState<UserAuth[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserAuthData = async () => {
      const { data, error } = await supabase
        .from("user_authentication")
        .select("*");

      if (error) {
        setError(error.message);
      } else {
        setUserAuthData(data || []);
      }
      setLoading(false);
    };

    fetchUserAuthData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User Authentication Data</h2>
      <ul>
        {userAuthData.map((user) => (
          <li key={user.user_id}>
            {user.email_auth} (Created: {user.create_at})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAuthentication;

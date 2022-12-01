import { FC, useEffect, useState } from "react";
import axios from "axios";
import { IUser } from "../types/types";
import { useParams, useNavigate } from "react-router-dom";

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get<IUser>(
          "https://jsonplaceholder.typicode.com/users/" + params.id
        );

        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        alert(error);
      }
    }
    fetchUsers();
  }, [params.id]);

  return (
    <div>
      <button onClick={() => navigate("/users")} style={{ cursor: "pointer" }}>
        Back
      </button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;

import "./App.css";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../../server/app";
import { useState } from "react";

interface UserInterface {
  ID: number;
  name: string;
  sex: string;
}

function App() {
  const [msg, setMsg] = useState("");
  const [logToServerRes, setLogToServerRes] = useState("");
  const [users, setUsers] = useState<UserInterface[]>();
  const sayHiClicked = () => {
    fetchFromServer();
  };

  const logToServerClicked = () => {
    fetchLogToServerFromServer();
  };

  const getUserClicked = () => {
    fetchUsers();
  };

  const client = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: "http://localhost:8080/trpc",
      }),
    ],
  });

  async function fetchFromServer() {
    const res = await client.sayHi2.query(10);
    setMsg(res);
  }

  const fetchLogToServerFromServer = async () => {
    const res = await client.logToServer.mutate("input from client");
    setLogToServerRes(res);
  };

  async function fetchUsers() {
    const res = await client.users.getUsers.query();
    setUsers(res);
  }

  return (
    <>
      <h3>{msg}</h3>
      <button onClick={sayHiClicked}>sayHi2</button>
      <hr />
      <h3>logToServer output: {logToServerRes}</h3>
      <button onClick={logToServerClicked}>logToServer</button>
      <hr />
      <button onClick={getUserClicked}>Get users</button>
      {users && (
        <ul>
          {users.map((user) => {
            return (
              <li key={user.ID}>
                {user.name} | {user.sex}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default App;

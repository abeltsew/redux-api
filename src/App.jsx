import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './features/user/userSlice';

const App = () => {
  const { users, isLoading, error } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Loading error</p>;
  }
  return (
    <>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name.first} {user.name.last}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;

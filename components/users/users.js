import React, { useEffect } from 'react';
import Link from "next/link";
import PropTypes from 'prop-types';

const UsersComponent = ({
  serverData,
  collection,
  loading,
  fetchUsers
}) => {
  useEffect(() => {
    if (collection.length) return;
    fetchUsers(serverData)
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {
        loading ? 'loading...' : ''
      }
      {
        // if we need to get users from SSR we need to map serverData
        // if we need to get them on client side we map our collection from redux(our server data saved in redux)
        // if we don't need to pass any server data , we just map our collection
        (serverData || collection ).map(user => (
          <div key={ user.id }>
            <Link href={ `/users/${ user.id }` }>
              user id =
              { user.id }
            </Link>
          </div>
        ))
      }
    </div>
  );
};

UsersComponent.propTypes = {
  collection: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchUsers: PropTypes.func.isRequired
};

export default UsersComponent;

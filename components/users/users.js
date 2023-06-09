import React, { useEffect } from 'react';
import Link from "next/link";
import PropTypes from 'prop-types';

const UsersComponent = ({
  collection,
  loading,
  fetchUsers
}) => {
 useEffect(() => {
    if (collection?.length) return;
    fetchUsers()
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {
        loading ? 'loading...' : ''
      }
      {
        collection?.map(user => (
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

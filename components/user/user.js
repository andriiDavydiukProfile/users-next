import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Classes from './styles.module.scss';
import {useRouter} from "next/router";

const UserComponent = ({
  user,
  loading,
  fetchUser
}) => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (Number(user.id) === parseInt(id, 10)) return;
    fetchUser(id)
  }, [id]);

  return (
    <div>
      <h1>
        User
        { user.id }
      </h1>
      {
        loading ? 'loading...' : ''
      }
      {
        user.name ? (
          <div className={ Classes.user }>
            { user.name }
          </div>
        ) : null
      }
    </div>
  );
};

UserComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  fetchUser: PropTypes.func.isRequired
};

export default UserComponent;

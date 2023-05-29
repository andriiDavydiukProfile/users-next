import { connect } from 'react-redux';
import { fetchUsers } from '@/store/actions/users';
import UsersComponent from './users';

const mapStateToProps = ({ users }) => ({ ...users });

export default connect(mapStateToProps, { fetchUsers })(UsersComponent);

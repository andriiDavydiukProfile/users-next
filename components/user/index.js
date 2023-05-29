import { connect } from 'react-redux';
import UserComponent from "./user";
import {fetchUser} from "@/store/actions/user";

const mapStateToProps = ({ user }) => ({ ...user });

export default connect(mapStateToProps, { fetchUser })(UserComponent);

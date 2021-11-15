import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";
import {
  getUserProfile,
  updateUserProfile,
} from "../redux/actions/userActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { ServerError } from "../errors/ServerErrors";
import { USER_PROFILE_UPDATE_RESET } from "../redux/constants/userConstants";

const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");
  // const [successMsg, setSuccessMsg] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userProfile = useSelector((state) => state.userProfile);
  const { loading, user } = userProfile;

  const userProfileUpdate = useSelector((state) => state.userProfileUpdate);
  const {
    loading: loadingUpdate,
    success: successUpdate,
    error: errorUpdate,
  } = userProfileUpdate;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || successUpdate) {
        dispatch({ type: USER_PROFILE_UPDATE_RESET });
        dispatch(getUserProfile("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, userInfo, history, user, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      setErrorMsg("Passwords don't match");
    } else {
      dispatch(
        updateUserProfile({
          _id: user._id,
          name,
          email,
          password,
        })
      );
      setErrorMsg("");
    }
  };

  return (
    <FormContainer>
      <h1>Your Profile</h1>

      {ErrorMsg && <Message variant="danger">{ErrorMsg}</Message>}
      {/* {successMsg && <Message variant="success">{successMsg}</Message>} */}
      {successUpdate && (
        <Message variant="success">Profile successfully updated</Message>
      )}
      {errorUpdate && <ServerError error={errorUpdate} />}
      <Form onSubmit={submitHandler} xsm={4} sm={6} md={8} lg={10}>
        <Form.Group controlId="username">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Confirmation Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="btn btn-dark" type="submit">
          {loading || loadingUpdate ? (
            <Loader width={"15px"} height={"15px"} />
          ) : (
            "Update"
          )}
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ProfileScreen;

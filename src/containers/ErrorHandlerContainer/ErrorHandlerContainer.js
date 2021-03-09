import React, { useState, useEffect } from "react";
import Modal from "./../../components/UI/Modal/Modal";

const ErrorHandlerContainer = (WrappedComponent, axios) => {
  const ErrorWrapper = (props) => {
    const [error, setError] = useState(null);

    const reqInterceptor = axios.interceptors.request.use((req) => {
      setError(null);
      return req;
    });

    const resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (err) => {
        console.log(err);
        setError(err);
      }
    );

    //ComponentWillUnmount like useEffect with clean useEffect
    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    }, [reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () => {
      setError(null);
    };

    return (
      <React.Fragment>
        <Modal show={error} closeModal={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </React.Fragment>
    );
  };

  return ErrorWrapper;
};

export default ErrorHandlerContainer;

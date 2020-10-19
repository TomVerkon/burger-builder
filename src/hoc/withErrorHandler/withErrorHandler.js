import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
      // myRequestInterceptor: null,
      // myResponseInterceptor: null,
    };

    componentDidMount() {
      axios.interceptors.request.use((request) => {
        this.setState({ error: null });
        console.log('componentDidMount axios.interceptors.request request: ')
        console.log(request)
        return request;
      });
      // this.setState({ myRequestInterceptor: myRequestInterceptor });

      axios.interceptors.response.use(response => response, (error) => {
        console.log('componentDidMount axios.interceptors.response error: ');
        console.log(error)
        this.setState({ error: error });
        //Promise.reject(error);
      });
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    
    render() {
      return (
        <>
          <Modal show={this.state.error ? true : false} modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;

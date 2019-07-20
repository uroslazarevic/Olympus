import React from "react";

import { PageLoader } from "components/UI";

class NotFound extends React.Component {
  state = {
    pageLoader: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ pageLoader: false });
    }, 1000);
  }

  render() {
    if (this.state.pageLoader) {
      return <PageLoader />;
    }
    return <h1>Not Found</h1>;
  }
}

export default NotFound;

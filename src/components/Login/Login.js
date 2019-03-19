import React from "react";

import backgroundImg from "imgs/login_background.jpg";

import { LoginHeader, LoginContent } from "components";
import { PageLoader } from "components/UI";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pageLoader: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ pageLoader: false });
    }, 1000);
  }

  render() {
    if (this.state.pageLoader) {
      return <PageLoader />;
    }
    return (
      <div
        className="login-page"
        style={{ backgroundImage: `url("${backgroundImg}")` }}
      >
        <div className="bg-layer">
          <div className="container">
            <LoginHeader />
            <LoginContent />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

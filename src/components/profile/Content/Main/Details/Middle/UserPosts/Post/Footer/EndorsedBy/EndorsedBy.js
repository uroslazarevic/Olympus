import React from "react";

class EndorsedBy extends React.Component {
  renderEndorseText() {
    console.log(this.props.endorse);
    const { count, list } = this.props.endorse;
    // return <div>SMTH</div>;
    switch (count) {
      case 0:
        return null;

      case 1:
        return (
          <div className="endorsed-by">
            <span className="person-endorsed">{list[0].name} liked this</span>
          </div>
        );

      case 2:
        return (
          <div className="endorsed-by">
            <span className="person-endorsed">{list[0].name}</span> and{" "}
            <span className="person-endorsed">{list[1].name}</span> liked this
          </div>
        );

      default:
        return (
          <div className="endorsed-by">
            <span className="person-endorsed">
              {list[0].name}, {list[1].name}
            </span>{" "}
            and {count - 2} more liked this
          </div>
        );
    }
  }

  render() {
    // console.log(this.props);
    return this.renderEndorseText();
    // return <div>smth</div>;
  }
}

export default EndorsedBy;

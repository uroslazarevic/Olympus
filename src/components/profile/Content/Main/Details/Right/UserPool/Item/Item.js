import React from "react";

import { calculateSharePercentageInTotal } from "utilis";
import { PoolItemAnswer, PoolItemProgressBar } from "components";
import { FriendsVoted } from "components/UI";

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userPoolVote: "", clickedRadioBtnId: "" };
  }

  handlePoolVoting = e => {
    const answer = e.target.getAttribute("value");
    this.setState({ userPoolVote: answer, clickedRadioBtnId: e.target.id });
  };

  render() {
    const { poolItem } = this.props;
    const { clickedRadioBtnId } = this.state;
    return (
      <li className="pool-item">
        <div className="question">{poolItem.question}</div>
        <div className="answers">
          {poolItem.answers.map(choice => {
            const radioBtnId = `radio-btn-${choice.id}`;
            const votePercentage = calculateSharePercentageInTotal(
              poolItem.totalVotes,
              choice.votes
            );

            return (
              <div key={choice.id} className="proposed-choice">
                <PoolItemAnswer
                  radioBtnId={radioBtnId}
                  clickedRadioBtnId={clickedRadioBtnId}
                  handlePoolVoting={this.handlePoolVoting}
                  answer={choice.answer}
                  votePercentage={votePercentage}
                />

                <PoolItemProgressBar votePercentage={votePercentage} />

                <div className="choice-votes">
                  {choice.votes > 1
                    ? `${choice.votes} friends voted for this`
                    : `${choice.votes} friend voted for this`}
                </div>

                <FriendsVoted voters={choice.voters} />
              </div>
            );
          })}
          <button className="vote-btn">Vote Now!</button>
        </div>
      </li>
    );
  }
}

export default Item;

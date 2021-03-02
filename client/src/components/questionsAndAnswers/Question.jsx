/* eslint-disable */
import React from 'react';
import Answers from './Answers.jsx';
import styled from 'styled-components';
import AnswerModal from './AnswerModal.jsx';

const ContainerA = styled.div`
  padding: 10px;
  border: 3px green solid;
`;

const EachQ = styled.div`
  display: flex;
`;

const MoveRight = styled.div`
  display: flex;
  float: right;
`;

const ContainerB = styled.div`
  padding: 10px;
  border: 3px gold solid;
`;

const Button = styled.button`
  text-decoration: underline;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const LoadButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
`;


// CLASS STARTS HERE ------------------------//

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      loadedState: false,
      loadMore: false,
      modal: false,
    };
    this.selectModal = this.selectModal.bind(this);
  }

  componentDidMount() {
    const object = this.props.item.answers
    if (object.length <= 1) {
      this.setState({
        answers: Object.values(object),
        loadedState: true,
        loadMore: false
      })
    } else {
      this.setState({
        answers: Object.values(object),
        loadedState: true,
        loadMore: true
      })
    }
  }

  selectModal() {
    this.setState({
      modal: !this.state.modal //toggle
    })
  }

  render() {
    // console.log(this.props.item)
    // seller={this.props.item.}
    if (!this.state.loadedState) {
      return(
        null
      )
    } else {
    return (
    <ContainerA>

           <EachQ>
           <h3>Q: {this.props.item.question_body} </h3>
           </EachQ>

              <MoveRight>
              <p> Helpful? </p>
              <Button> Yes </Button>
              <p>({this.props.item.question_helpfulness})</p>
              <span className="divider"> | </span>
              <Button onClick={ this.selectModal }> Add Answer </Button>
              </MoveRight>


        <div>
        {this.state.answers.map((itemA, i) => {
          return (
            <ContainerB>
            <Answers item={itemA} key={this.state.answers.id} />
            </ContainerB>
          )
        })}
        {this.state.answers.length > 1 ? (
          <LoadButton onClick={(event) => {event.preventDefault(); } }> LOAD MORE ANSWERS </LoadButton>
          ) : (
          null
          )}
        </div>
          <AnswerModal displayModal={this.state.modal} closeModal={this.selectModal}/>
    </ContainerA>

    );
  }
}
}

export default Question;

// Q: -
// A: -
// helpful question button -value helpful, yes is button, {} answers.count value
// add answer button

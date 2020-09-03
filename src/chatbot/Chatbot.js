import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { red } from '@material-ui/core/colors';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

const theme = {
    background: '#ffffff',
    fontFamily: 'Avenir Next W02,Helvetica,Arial,sans-serif',
    headerBgColor: '#f92d47',
    headerFontColor: '#fff',
    headerFontSize: '16px',
    botBubbleColor: '#EAF0F6',
    botFontColor: '#425b76',
    userBubbleColor: '#f92d47',
    userFontColor: '#fff',
    userFontSize: '25px',
  };

class SimpleForm extends Component {

  render() {
    return (
        <ThemeProvider theme={theme}>
      <ChatBot
      headerTitle="Pinnium Bot"
  speechSynthesis={{ enable: false, lang: 'en' }}
  floating={true}
  hideUserAvatar={true}
  bubbleStyle={{ fontSize: '15px', maxWidth: '65%'}}
  width={'380px'}
  botAvatar={'https://freesvg.org/img/1538298822.png'}
        steps={[
          {
            id: '1',
            message: 'Before we get started, could I have your name please?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '2',
          },
          {
            id: '2',
            message: 'Hey {previousValue}! Could you please share your organization name?',
            trigger: 'organisationName',
          },
          {
            id: 'organisationName',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Thank you. Can I get your phone number in case we get disconnected?',
            trigger: 'mobileNumber',
          },
          {
            id: 'mobileNumber',
            user: true,
            trigger: '4',
          },
          {
            id: '4',
            message: 'What is a good email address to contact you with?',
            trigger: 'email',
          },
          {
            id: 'email',
            user: true,
            trigger: '6',
          },
        //   {
        //     id: 'gender',
        //     options: [
        //       { value: 'male', label: 'Male', trigger: '5' },
        //       { value: 'female', label: 'Female', trigger: '5' },
        //     ],
        //   },
        //   {
        //     id: '5',
        //     message: 'What is a good email address to contact you with?',
        //     trigger: 'mobileNumber',
        //   },
        //   {
        //     id: 'mobileNumber',
        //     user: true,
        //     trigger: '6',
        //   },
          {
            id: '6',
            message: 'Okay. I just need a little bit of information. First up, what are you looking for ?',
            trigger: 'lookingFor',
          },
          {
            id: 'lookingFor',
            user: true,
            trigger: '7',
          },
        //   {
        //     id: 'age',
        //     user: true,
        //     trigger: '7',
        //     validator: (value) => {
        //       if (isNaN(value)) {
        //         return 'value must be a number';
        //       } else if (value < 0) {
        //         return 'value must be positive';
        //       } else if (value > 120) {
        //         return `${value}? Come on!`;
        //       }

        //       return true;
        //     },
        //   },
        {
            id: '7',
            message: 'And finally, what is the quantity that you are looking for ?',
            trigger: 'quantity',
          },
          {
            id: 'quantity',
            options: [
              { value: '1-5', label: '1-5', trigger: 'end-message' },
              { value: '5-10', label: '5-10', trigger: 'end-message' },
              { value: '10-20', label: '10-20', trigger: 'end-message' },
              { value: '20-50', label: '20-50', trigger: 'end-message' },
              { value: '50+', label: '50+', trigger: 'end-message' },
            ],
          },
        //   {
        //     id: '8',
        //     message: 'Great! Check out your summary',
        //     trigger: 'review',
        //   },
        //   {
        //     id: 'review',
        //     component: <Review />,
        //     asMessage: true,
        //     trigger: 'update',
        //   },
        //   {
        //     id: 'update',
        //     message: 'Would you like to update some field?',
        //     trigger: 'update-question',
        //   },
        //   {
        //     id: 'update-question',
        //     options: [
        //       { value: 'yes', label: 'Yes', trigger: 'update-yes' },
        //       { value: 'no', label: 'No', trigger: 'end-message' },
        //     ],
        //   },
        //   {
        //     id: 'update-yes',
        //     message: 'What field would you like to update?',
        //     trigger: 'update-fields',
        //   },
        //   {
        //     id: 'update-fields',
        //     options: [
        //       { value: 'name', label: 'Name', trigger: 'update-name' },
        //       { value: 'gender', label: 'Gender', trigger: 'update-gender' },
        //       { value: 'age', label: 'Age', trigger: 'update-age' },
        //     ],
        //   },
        //   {
        //     id: 'update-name',
        //     update: 'name',
        //     trigger: '7',
        //   },
        //   {
        //     id: 'update-gender',
        //     update: 'gender',
        //     trigger: '7',
        //   },
        //   {
        //     id: 'update-age',
        //     update: 'age',
        //     trigger: '7',
        //   },
          {
            id: 'end-message',
            message: 'Thanks. We’ve passed along this information. A member of our team will be in touch soon',
            end: true,
          },
        ]}
        // height={'100vh'}
        floatingStyle={{ background: '#f92d47'}}
      />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
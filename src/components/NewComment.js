import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import NearMe from '@material-ui/icons/NearMe';

class NewComment extends Component {

  state = { textfield: '' }

  onKeyPress = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      let _AUTHOR = 'anonymous';
      let comment = this.state.textfield
      this.setState({ textfield: '' }); // clear textfield
      this.props.onCreateComment(comment, _AUTHOR);
    }
  }

  onFormSubmit = () => {
    if (this.state.textfield !== '') {
      let _AUTHOR = 'anonymous';
      let comment = this.state.textfield
      this.setState({ textfield: '' }); // clear textfield
      this.props.onCreateComment(comment, _AUTHOR);
    }
  }

  handleTextFieldChange = (event) => {
    this.setState({
      textfield: event.target.value
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12}>
        <Card className={classes.cardComment} style={{ padding: 10 }}>
        <ValidatorForm ref="form" onSubmit={this.onFormSubmit}>
          <TextValidator
            id="comment-field"
            name="comment-field"
            label="Type your comment"
            value={this.state.textfield}
            onChange={this.handleTextFieldChange}
            onKeyPress={this.onKeyPress}
            validators={['required']}
            errorMessages={['This comment field is required.']}
            className={classes.inputbackground}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              classes: {
                root: classes.inputLabelProps
              }
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}>
            Send
            <Icon className={classes.rightIcon}>
              <NearMe />
            </Icon>
          </Button>
        </ValidatorForm>
        </Card>
      </Grid>
    );
  }
}

const styles = theme => ({
  cardComment: {
    maxWidth: '100%',
    backgroundColor: 'white'
  },
  inputLabelProps: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputbackground: {
    background: 'white'
  },
  button: {
    // margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

NewComment.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NewComment);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class EditComment extends Component {

  state = { textfield: '' }

  componentDidMount() {
    const { comment } = this.props;
    this.setState({
      textfield: comment
    });
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      const { onEditComment } = this.props;
      onEditComment(event.target.value);
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
          <ValidatorForm ref="form" onSubmit={() => false}>
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
          </ValidatorForm>
        </Card>
      </Grid>
    );
  }
}

const styles = theme => ({
  cardComment: {
    maxWidth: '100%',
    backgroundColor: '#eeeeee'
  },
  inputLabelProps: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputbackground: {
    background: '#eeeeee'
  },
});

EditComment.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(EditComment);

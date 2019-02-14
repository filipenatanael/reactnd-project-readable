import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

class NewComment extends Component {
  onKeyPress = (event) =>{
    if (event.key === 'Enter') {
      const _AUTHOR = 'anonymous';
      const comment = event.target.value;
      this.props.onCreateComment(comment, _AUTHOR);
      // event.preventDefault();
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12}>
        <Card className={classes.cardComment} style={{ padding: 10 }}>
          <TextField
            className={classes.inputbackground}
            id="comment-field"
            label="Type your comment"
            fullWidth
            margin="normal"
            variant="outlined"

            onKeyPress={this.onKeyPress}
            InputLabelProps={{
              classes: {
                root: classes.inputLabelProps
              }
            }}
          />
        </Card>
      </Grid>
    );
  }
}

const styles = theme => ({
  cardComment: {
    maxWidth: '100%',
    backgroundColor: '#fff'
  },
  inputLabelProps: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputbackground: {
    background: '#fff'
  },
});

NewComment.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NewComment);

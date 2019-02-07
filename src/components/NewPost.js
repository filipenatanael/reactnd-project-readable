import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Description from '@material-ui/icons/Description';
import CheckCircle from '@material-ui/icons/CheckCircle';
import PersonPin from '@material-ui/icons/PersonPin';
import TextFields from '@material-ui/icons/TextFields';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    marginTop: 75,
    flexGrow: 1,
  },
  textfield: {
    width: 500
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin: {
   margin: theme.spacing.unit,
  },
});

class InputWithIcon extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Paper className={classes.paper}>
            <FormControl className={classes.margin}>
              <div className={classes.margin}>
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                    <Description />
                  </Grid>
                  <Grid item>
                    <TextField className={classes.textfield} id="input-title" label="Post Title" />
                  </Grid>
                </Grid>
              </div>

              <div className={classes.margin}>
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                    <TextFields />
                  </Grid>
                  <Grid item>
                    <TextField className={classes.textfield} id="input-content" label="Content" />
                  </Grid>
                </Grid>
              </div>

              <div className={classes.margin}>
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                    <PersonPin />
                  </Grid>
                  <Grid item>
                    <TextField className={classes.textfield} id="input-author" label="Author" />
                  </Grid>
                </Grid>
              </div>


              <div className={classes.margin}>
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                    <CheckCircle />
                  </Grid>
                  <Grid item>
                    <Select
                      value={'0'}
                      onChange={() => false}
                      className={classes.textfield}
                    >
                      <MenuItem value="0">
                      <em>React</em>
                      </MenuItem>
                      <MenuItem value={1}>Redux</MenuItem>
                      <MenuItem value={2}>Udacity</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </div>

            </FormControl>
          </Paper>
        </Grid>
      </div>
    )
  }

}

InputWithIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputWithIcon);

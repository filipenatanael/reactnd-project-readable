import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator, SelectValidator  } from 'react-material-ui-form-validator';
import { connect } from 'react-redux';
import { createPost, fetchCategories } from '../actions';
import { Link } from 'react-router-dom'

const GoToMain = props => <Link to="/" {...props} />

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        title: '',
        body: '',
        author: '',
        category: '',
      },
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWilMount() {
    this.props.fetchCategories()
  }

  handleChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit() {
    this.setState({ submitted: true }, () => {
      this.props.createPost(this.state.formData, () => {
        this.props.history.push('/');
      });
      // setTimeout(() => this.setState({ submitted: false }), 5000);
    });
  }

  getOptions = () => {
    const { categories } = this.props

    if (categories.length > 0) {
      return  categories.map(category => (
        <option key={category.name} value={category.name}>
        {category.name}
        </option>
      ));
    }
  };

  render() {
    const { classes } = this.props;
    const { formData, submitted } = this.state;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Paper className={classes.paper}>
          <div className={classes.margin}>
            <ValidatorForm
              ref="form"
              onSubmit={this.handleSubmit}
              >
                 <h2 className={classes.heading}>Create new posts</h2>
                 <TextValidator
                    className={classes.textValidator}
                    label="Title"
                    onChange={this.handleChange}
                    name="title"
                    value={formData.title}
                    validators={['required']}
                    errorMessages={['this field is required']}
                 />
                 <br />
                 <TextValidator
                    className={classes.textValidator}
                    label="Content"
                    onChange={this.handleChange}
                    name="body"
                    value={formData.body}
                    validators={['required']}
                    errorMessages={['this field is required']}
                 />
                 <br />
                 <TextValidator
                    className={classes.textValidator}
                    label="Author"
                    onChange={this.handleChange}
                    name="author"
                    value={formData.author}
                    validators={['required']}
                    errorMessages={['this field is required']}
                 />
                 <br />
                 <SelectValidator
                    className={classes.selectValidator}
                    id="category"
                    onChange={this.handleChange}
                    name="category"
                    value={formData.category}
                    SelectProps={{
                    native: true
                    }}
                    validators={['required']}
                    errorMessages={['this field is required']}
                 >
                 <option value="">Select an option</option>
                  { this.getOptions() }
                 </SelectValidator>
                 <br />

                 <div className={classes.buttonContainer}>
                   <Button
                      className={classes.button}
                      raised="true"
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={submitted}
                   >
                       {
                           (submitted && 'Your form is submitted!')
                           || (!submitted && 'Submit')
                       }
                   </Button>

                   <Button
                      component={GoToMain}
                      className={classes.button}
                      raised="true"
                      variant="contained"
                      color="secondary"
                      disabled={submitted}
                   >
                    Cancel
                   </Button>
                 </div>
             </ValidatorForm>
           </div>
          </Paper>
        </Grid>
      </div>
    )
  }
}

NewPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return { categories: state.categories }
}

const styles = theme => ({
  root: {
    marginTop: 75,
    flexGrow: 1,
  },
  margin: {
   margin: theme.spacing.unit,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heading: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  textValidator: {
    width: 500
  },
  selectValidator: {
    width: 500,
    marginTop: 20
  },
  buttonContainer: {
    margin: theme.spacing.unit,
    marginLeft: 'auto',
    marginRight: 0,
    marginTop: 50
  },
  button: {
    width: 150,
    margin: 5
  },
});

export default withStyles(styles)(connect(mapStateToProps, {createPost, fetchCategories})(NewPost));

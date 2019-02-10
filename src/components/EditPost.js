import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator, SelectValidator  } from 'react-material-ui-form-validator';
import NotFound from './shared/NotFound';

const GoToMain = props => <Link to="/" {...props} />

class EditPost extends Component {
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
  }

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id, this.fillFields)
  }

  fillFields = () => {
    const { formData } = this.state;
    const {
      post
    } = this.props
    if (post) {
      formData['title'] = post.title;
      formData['body'] = post.body;
      formData['author'] = post.author;
      formData['category'] = post.category;
      this.setState({ formData });
    }
  }

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit = () => {
    const { post,
      match: { params: { id } },
      classes
    } = this.props

    const { author, category, ...onlySomeFileds } = this.state.formData
    this.props.editPost(id, onlySomeFileds, () => {
      this.props.history.push('/');
    })
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
    const { post,
      match: { params: { id, category } },
      classes
    } = this.props

    const { formData, submitted } = this.state;

    return (
      (!post || post.category !== category)
      ? <NotFound />
      :
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
                    name="title"
                    value={formData.title}
                    onChange={this.handleChange}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    InputLabelProps={{
                      classes: {
                        root: classes.inputLabelProps
                      }
                    }}
                 />
                 <br />
                 <TextValidator
                    className={classes.textValidator}
                    label="Content"
                    name="body"
                    value={formData.body}
                    onChange={this.handleChange}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    InputLabelProps={{
                      classes: {
                        root: classes.inputLabelProps
                      }
                    }}
                 />
                 <br />
                 <TextValidator
                    className={classes.textValidator}
                    label={<span className={classes.tabLabel}>Label</span>}
                    name="author"
                    value={formData.author}
                    onChange={this.handleChange}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    disabled={true}
                    InputLabelProps={{
                      classes: {
                        root: classes.inputLabelProps
                      }
                    }}
                 />
                 <br />
                 <SelectValidator
                    className={classes.selectValidator}
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={this.handleChange}
                    SelectProps={{ native: true }}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    disabled={true}
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

EditPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    marginTop: 75,
    flexGrow: 1,
     flexWrap: 'wrap',
  },
  margin: {
   margin: theme.spacing.unit,
  },
  heading: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textValidator: {
    marginLeft: theme.spacing.unit,
     marginRight: theme.spacing.unit,
     width: 500,
     marginTop: 30,
  },
  inputLabelProps: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  selectValidator: {
    width: 500,
    marginTop: 30,
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

export default withStyles(styles)(EditPost);

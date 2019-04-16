import React from 'react'
import style from './EditModel.module.css'
import Button from '@material-ui/core/Button';
import { Field, reduxForm } from 'redux-form'

import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

class EditModel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: '',
            imdbID: this.props.movie.imdbID,
            Title: this.props.movie.Title,
            Year: this.props.movie.Year,
            Runtime: this.props.movie.Runtime,
            Genre: this.props.movie.Genre,
            Director: this.props.movie.Director
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;

        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit(event) {
        if(!this.state.Title ) {
            this.setState({
                error: "Error : Title is not set"
            });
        } else if(this.state.Year < 1900 || this.state.Year > 2019){
            this.setState({
                error: "Error : Year must be between 1900 and 2019"
            });
        } else if(!this.state.Runtime ) {
            this.setState({
                error: "Error : Runtime is not set"
            });
        } else if(!this.state.Genre ) {
            this.setState({
                error: "Error : Genre is not set"
            });
        } else if(!this.state.Director ) {
            this.setState({
                error: "Error : Director is not set"
            });
        } else {
            this.props.click(this.state);
            this.props.handleClose();
        }
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
                <DialogTitle id="form-dialog-title"> Editing {this.props.movie.Title}</DialogTitle>
                <form onSubmit={this.handleSubmit}>
                    <DialogContent>
                        <p style={{color: 'red'}}>{this.state.error}</p>
                        <TextField
                            disabled
                            fullWidth
                            name="imdbID"
                            id="outlined-required"
                            label="imdbID"
                            defaultValue={this.props.movie.imdbID}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            inputProps={{
                                maxLength: 50,
                            }}
                            // required
                            fullWidth
                            name="Title"
                            id="outlined-required"
                            label="Title"
                            defaultValue={this.props.movie.Title}
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        <TextField
                            // required
                            fullWidth
                            type="number"
                            name="Year"
                            id="outlined-required"
                            label="Year"
                            defaultValue={this.props.movie.Year}
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        <TextField
                            inputProps={{
                                maxLength: 50,
                            }}
                            // required
                            fullWidth
                            name="Runtime"
                            id="outlined-required"
                            label="Runtime"
                            defaultValue={this.props.movie.Runtime}
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        <TextField
                            inputProps={{
                                maxLength: 50,
                            }}
                            // required
                            fullWidth
                            name="Genre"
                            id="outlined-required"
                            label="Genre"
                            defaultValue={this.props.movie.Genre}
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        <TextField
                            inputProps={{
                                maxLength: 50,
                            }}
                            // required
                            fullWidth
                            name="Director"
                            id="outlined-required"
                            label="Director"
                            defaultValue={this.props.movie.Director}
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => { this.props.handleClose() }} color="primary">
                            Cancel
                    </Button>
                        <Button type="submit" color="primary">
                            Update
                    </Button>
                    </DialogActions>
                </form>
            </React.Fragment>
        )
    }
}


export default EditModel

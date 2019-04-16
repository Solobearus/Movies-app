import React from 'react'
import style from './AddModal.module.css'
import Button from '@material-ui/core/Button';
import { Field, reduxForm } from 'redux-form'

import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

class AddModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            imdbID: '',
            Title: '',
            Year: 0,
            Runtime: '',
            Genre: '',
            Director: '',
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
        console.log(this.state);

        this.props.click(this.state);
        this.props.handleClose();
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
                <DialogTitle id="form-dialog-title"> Adding a new movie</DialogTitle>
                <form onSubmit={this.handleSubmit}>
                    <DialogContent>
                        <TextField
                            inputProps={{
                                maxLength: 9,
                                minLength: 9,
                            }}
                            required
                            fullWidth
                            name="imdbID"
                            id="outlined-required"
                            label="imdbID"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        <TextField
                            inputProps={{
                                maxLength: 50,
                            }}
                            required
                            fullWidth
                            name="Title"
                            id="outlined-required"
                            label="Title"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        <TextField
                            required
                            fullWidth
                            type="number"
                            inputProps={{
                                min: "1900",
                                max: "2019"
                            }}
                            name="Year"
                            id="outlined-required"
                            label="Year"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        <TextField
                            inputProps={{
                                maxLength: 50,
                            }}
                            required
                            fullWidth
                            name="Runtime"
                            id="outlined-required"
                            label="Runtime"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        <TextField
                            inputProps={{
                                maxLength: 50,
                            }}
                            required
                            fullWidth
                            name="Genre"
                            id="outlined-required"
                            label="Genre"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        <TextField
                            inputProps={{
                                maxLength: 50,
                            }}
                            required
                            fullWidth
                            name="Director"
                            id="outlined-required"
                            label="Director"
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
                            Create
                        </Button>
                    </DialogActions>
                </form>
            </React.Fragment>
        )
    }
}


export default AddModal

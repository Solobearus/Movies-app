import React from 'react'
import Button from '@material-ui/core/Button';
import store from '../../../Redux/store'
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

class AddModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            titles: store.getState().moviesReducer.items.map((item) => item.Title),
            error: '',
            imdbID: '',
            Title: '',
            Year: 0,
            Runtime: '',
            Genre: '',
            Director: '',
        };

        console.log(this.state.titles);
        
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
        if(!this.state.imdbID ) {
            this.setState({
                error: "Error : imdbID is not set"
            });
        } else if(this.state.imdbID.length !== 9 ) {
            this.setState({
                error: "Error : imdbID must be 9 characters long"
            });
        } else if(!this.state.Title ) {
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
        } else if(this.state.titles.includes(this.state.Title)) {
            this.setState({
                error: `Error : ${this.state.Title} already exists.`
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
                <DialogTitle id="form-dialog-title"> Adding a new movie</DialogTitle>
                <form onSubmit={this.handleSubmit}>
                    <DialogContent>
                        <p style={{color: 'red'}}>{this.state.error}</p>
                        <TextField
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
                            fullWidth
                            name="Title"
                            id="outlined-required"
                            label="Title"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        <TextField
                            fullWidth
                            type="number"
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

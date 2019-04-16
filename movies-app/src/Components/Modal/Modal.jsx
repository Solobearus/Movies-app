import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';

import DeleteModel from './DeleteModel/DeleteModel.jsx';
import EditModel from './EditModel/EditModel.jsx';
import AddModal from './AddModal/AddModal.jsx';

export default class Modal extends React.Component {
    
    constructor(props) {
        super(props);
        this.model = null;
    }

    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        if (this.props.value == "Delete") {
            this.model = <DeleteModel
                click={this.props.click}
                movie={this.props.movie}
                handleClose={this.handleClose}
            />
        } else if (this.props.value == "Edit") {
            this.model = <EditModel
                click={this.props.click}
                movie={this.props.movie}
                handleClose={this.handleClose}
            />
        } else if (this.props.value == "Add") {
            this.model = <AddModal
                click={this.props.click}
                handleClose={this.handleClose}
            />
        }

        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    {this.props.value}
                </Button>
                <Dialog
                    open={this.state.open}
                    aria-labelledby="form-dialog-title"
                >
                    {this.model}
                </Dialog>
            </div>
        );
    }
}
import React, { Component } from 'react';
import classes from './ContainerInput.module.css';
import ContainerList from './ContainerList/ContainerList';
import Modal from '../../../../../components/UI/Modal/Modal';
import ContainerDetails from '../ContainerInput/ContainerDetails/ContainerDetails';


class ContainerInput extends Component {
    state={
        containers: [],
        viewContainer: '',
        modal: false,
        details: false,
        };

        addContainerHandler = (e) => {
            if (this._inputContainer.value !== '') {
                let newContainer = {
                    text: this._inputContainer.value,
                    key: Date.now()
                };
                /*let newSize = {
                    text: this._inputSize.value,
                    key: Date.now()
                };*/

                this.setState((prevContainer) => {
                    return {
                        containers: prevContainer.containers.concat(newContainer),
                        /*size: prevSize.size.concat(newSize)*/
                    };
                });
            }
            
            this._inputContainer.value = '';
            //this._inputSize.value = '';

            e.preventDefault();
        };
    
    
        deleteContainerHandler = (key) => {
            let filteredContainer = this.state.containers.filter((container) => {
                return (container.key !== key)
            });

            this.setState({
                containers: filteredContainer
            });

        };

        editHandler = () => (
            this.setState({
                modal: true,

            })
        );

        detailsHandler = () => (
            this.setState(prevState => ({
                details: !prevState.details
              })
        )
        );

        closeModalHandler = () => (
            this.setState({modal: false})
        );
        
    
    render() {

        return(
            <React.Fragment>
                <Modal show={this.state.modal}>
                    <ContainerDetails clicked={this.closeModalHandler}/>
                </Modal>
                <div className={classes.ContainerInput}>
                    <div className={classes.Input}>
                        <form onSubmit={this.addContainerHandler}>
                            <h2>Containers</h2>
                            <label><input ref={(a) => this._inputContainer = a}
                                    placeholder='Enter Container #'
                                    maxLength='11'
                                    minLength='11'
                                    pattern='[A-Za-z]{4}[0-9]{7}'
                                    title='4 Letters + 7 Digits'></input></label>
                            <button type='submit'>Add</button>
                        </form>
                    </div>
                    <div className={classes.Display}>
                        <table>
                            <ContainerList
                                entries={this.state.containers}
                                delete={this.deleteContainerHandler}
                                details={this.detailsHandler}
                                edit={this.editHandler}
                                showDetails={this.state.details}

                                        />
                        </table>

                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default ContainerInput;
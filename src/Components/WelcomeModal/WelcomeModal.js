import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const ModalBasicExample = props => {
    const onClose = e => {
        e.preventDefault();
        props.setShowModal(false);
        localStorage.setItem('modalShown', true);
    };
    return (
        <Modal open={props.showModal} size="small">
            <Header icon="archive" content="Archive Old Messages" />
            <Modal.Content>
                <p>Do you really want to go?</p>
            </Modal.Content>
            <Modal.Actions>
                <Button color="green" inverted onClick={e => onClose(e)}>
                    <Icon name="checkmark" /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default ModalBasicExample;

import React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import styled from 'styled-components';

export default function ModalBasicExample(props) {
    const onClose = e => {
        e.preventDefault();
        props.setShowModal(false);
        localStorage.setItem('modalShown', true);
    };

    const leavePage = () => {
        window.location.assign('https://www.google.com/search?q=puppies&source=lnms&tbm=isch&sa=X&ved=0ahUKEwipu-aoru7iAhVQIlAKHeDODxAQ_AUIECgB&biw=1920&bih=946');
    };
    return (
        <Modal open={props.showModal} basic size="small">
            <Modal.Content>
                <SDModalContentContainer>
                    <SDModalHeader>You are about to enter TOXIC HACKERS</SDModalHeader>
                    <SDModalContent>The following website contains strong language which may be offensive to some people and inappropriate for children. You have been warned!</SDModalContent>
                </SDModalContentContainer>
            </Modal.Content>
            <Modal.Actions>
                <SDModalContainer>
                    <Button className="closeButton" onClick={() => leavePage()}>
                        <Icon name="close" /> I would rather see some puppies
                    </Button>
                    <Button className="proceedButton" onClick={e => onClose(e)}>
                        <Icon name="checkmark" /> Proceed
                    </Button>
                </SDModalContainer>
            </Modal.Actions>
        </Modal>
    );
}

const SDModalContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`;

const SDModalHeader = styled.div`
    font-size: 2rem;
    color: #1fda02;
`;

const SDModalContent = styled.div`
    padding-top: 20px;
    font-size: 1.2rem;
    text-align: center;
    line-height: 2;
    letter-spacing: 2;
`;

const SDModalContainer = styled.div`
    display: flex;
    justify-content: center;
    .proceedButton {
        background-color: #1fda02;
        color: white;
        margin: 0 10px;
        &:hover {
            background-color: white;
            color: #1fda02;
        }
    }
    .closeButton {
        background-color: #b401b5;
        color: white;
        margin: 0 10px;
        &:hover {
            background-color: white;
            color: #b401b5;
        }
    }
`;

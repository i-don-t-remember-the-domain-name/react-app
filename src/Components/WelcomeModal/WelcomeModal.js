import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
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
        <Modal open={props.showModal} dimmer="blurring" basic size="large">
            <SDModal>
                <Modal.Content>
                    <SDModalContentContainer>
                        <SDModalHeader data-testid="warning-heading">You are about to enter TOXIC HACKERS</SDModalHeader>
                        <SDModalContent data-testid="warning-content">
                            Toxic hackers lets you see how toxic any HackerNews commenter is. Search by username or browse the ranks of the "Saltiest". Unfortunatly, following website contains strong
                            language which may be offensive to some people and inappropriate for children. Proceed only if you are prepared for serious toxicity.
                        </SDModalContent>
                    </SDModalContentContainer>
                </Modal.Content>
                <Modal.Actions>
                    <SDModalButtonsContainer>
                        <Button data-testid="warning-close-button" className="closeButton" onClick={() => leavePage()}>
                            I would rather see some puppies
                        </Button>
                        <Button data-testid="warning-proceed-button" className="proceedButton" onClick={e => onClose(e)}>
                            Proceed
                        </Button>
                    </SDModalButtonsContainer>
                </Modal.Actions>
            </SDModal>
        </Modal>
    );
}

const SDModal = styled.div`
    background-color: #040430;
    padding: 50px;
    @media (max-width: 600px) {
        padding: 30px 10px;
    }
`;

const SDModalContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    background-color: #040430;
    @media (max-width: 600px) {
        padding: 0 0 30px 0;
    }
`;

const SDModalHeader = styled.div`
    font-size: 2.5rem;
    color: #1fda02;
    text-align: center;
    line-height: 1.5;
    @media (max-width: 600px) {
        font-size: 1.8rem;
    }
`;

const SDModalContent = styled.div`
    padding-top: 20px;
    font-size: 1.2rem;
    text-align: center;
    line-height: 2;
    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

const SDModalButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #040430;
    .proceedButton {
        background-color: #1fda02;
        color: white;
        margin: 0 10px;
        &:hover {
            background-color: white;
            color: #1fda02;
        }
        @media (max-width: 600px) {
            font-size: 1rem;
            line-height: 1.5;
            margin: 0;
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
        @media (max-width: 600px) {
            font-size: 1rem;
            line-height: 1.5;
            margin: 0 10px 0 0;
        }
    }
`;

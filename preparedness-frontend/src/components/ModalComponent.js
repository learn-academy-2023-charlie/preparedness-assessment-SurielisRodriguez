import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
} from 'reactstrap';
import PropTypes from 'prop-types';

const ModalComponent = (props) => {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  const toggle = () => setModal(!modal);

  const changeBackdrop = (e) => {
    let { value } = e.target;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    setBackdrop(value);
  };

  const changeKeyboard = (e) => {
    setKeyboard(e.currentTarget.checked);
  };

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <Button onClick={toggle} style={{ backgroundColor:"#0dcaf0"}}>
          Click Me
        </Button>
      </Form>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        backdrop={backdrop}
        keyboard={keyboard}
      >
        <ModalHeader toggle={toggle}>{props.name}</ModalHeader>
        <ModalBody>
        Lick the plastic bag eat an easter feather as if it were a bird then burp victoriously, but tender for decide to want nothing to do with my owner today toilet paper attack claws fluff everywhere meow miao french ciao litterbox yet carrying out surveillance on the neighbour's dog. My slave human didn't give me any food so i pooped on the floor scratch yet massacre a bird in the living room and then look like the cutest and most innocent animal on the planet. Catto munch salmono intrigued by the shower, or pee on walls it smells like breakfast and chase mice, yet jump up to edge of bath, fall in then scramble in a mad panic to get out. Find something else more interesting sit in box so purrrrrr but mrow and nya nya nyan. Touch water with paw then recoil in horror taco cat backwards spells taco cat and catch eat throw up catch eat throw up bad birds hide at bottom of staircase to trip human. 
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

ModalComponent.propTypes = {
  className: PropTypes.string,
};

export default ModalComponent;
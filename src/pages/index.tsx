import { Modal } from "../components/modal/Modal";
import React from "react";

export default function Home() {
  return (
    <Modal show={true} onHide={() => {}}>
      <Modal.Header closeButton>
        <Modal.Title>I Have Approximate Knowledge of Many Things</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Here’s my other option… You see these? These Lemonjons are me, and I
        wonder if they can destroy you. If you are the head that blooms atop the
        ziggurat, then the stairs that lead to you must be infinite!
      </Modal.Body>
      <Modal.LinkFooter href="#">
        Infinite stairs are unacceptable!
      </Modal.LinkFooter>
    </Modal>
  );
}

import { Modal as BootstrapModal } from "react-bootstrap";
import { ReactNode } from "react";

export const Modal = Object.assign(BootstrapModal, { LinkFooter });

function LinkFooter(props: { href: string; children: ReactNode }) {
  return (
    <div className="modal-link-footer">
      <a href={props.href}>
        {props.children} <i className="fas fa-arrow-right" />
      </a>
    </div>
  );
}

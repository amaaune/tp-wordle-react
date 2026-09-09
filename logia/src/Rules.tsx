import { useState, ReactNode } from "react";
import "./modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  );
}

export function RulesButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Règles</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Règles du jeu</h2>
        <ul>
          <li>🟩 lettre bien placée</li>
          <li>🟧 lettre présente mais mal placée</li>
          <li>⬜ lettre absente du mot</li>
        </ul>
        <p>Tu as 6 essais pour trouver le mot.</p>
      </Modal>
    </>
  );
}
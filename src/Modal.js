import { useState, useRef, useEffect, useLayoutEffect } from "react";

const Modal = () => {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();
  //   useEffect(() => {
  //     if (popup.current == null || button.current == null) return;
  //     const { bottom } = button.current.getBoundingClientRect();
  //     popup.current.style.top = `${bottom + 25}px`;
  //   }, [show]);
  // useEffect will run the code asynchronously and 1st show popup just below the button when DOM is created and than it apply the style of bottom:'25px'

  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);
  // useLayoutEffect will run the code synchronously and directly show popup just below the button with applying the style of bottom:"25px before loading the DOM" it disrupts the performance use 'useLayoutEffect' whenever u want the layout to be Created 1st before DOM

  return (
    <div>
      <h1>Modal</h1>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click Here !
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          This is a popup
        </div>
      )}
    </div>
  );
};
export default Modal;

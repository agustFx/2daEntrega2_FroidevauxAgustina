import React from 'react';

const Toast = ({greeting}) => {
    return (
        <>
            <div
  className="toast show"
  role="alert"
  aria-live="assertive"
  aria-atomic="true"
>
  <div className="toast-header">
    <strong className="me-auto">PIZZA'S INK</strong>
    <small>11 mins ago</small>
    <button
      type="button"
      className="btn-close ms-2 mb-1"
      data-bs-dismiss="toast"
      aria-label="Close"
    >
      <span aria-hidden="true" />
    </button>
  </div>
  <div className="toast-body">{greeting}</div>
</div>
        </>
    );
}

export default Toast;

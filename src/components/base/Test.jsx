export function Test({ title, secTitle, children }) {
    return (
      <form className="form__container">
        <div className="form__title">{title}</div>
        <div className="form__sec__title">{secTitle}</div>
        <div className="form__data">
          {children}
        </div>
        <div className="form__data">
          {children}
        </div>
      </form>
    );
  }
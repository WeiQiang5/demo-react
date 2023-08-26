import PropType from "prop-types";
import React from "react";

const Dialog = function Dialog(props) {
  let { title, content, children } = props;
  children = React.Children.toArray(children);

  // 具名插槽
  let defaultSlot, footerSlot;
  children.forEach((item) => {
    const name = item.props.slot;
    if (name === "title") {
      defaultSlot = item;
    } else if (name === "footer") {
      footerSlot = item;
    }
  });
  console.log(defaultSlot);

  return (
    <div className="dialog">
      {!defaultSlot ? <div className="title">{title}</div> : defaultSlot}

      <div className="content">{content}</div>
      {!footerSlot ? <div className="footer">{children}</div> : footerSlot}
    </div>
  );
};

Dialog.defaultProps = {
  title: "标题",
};
Dialog.propTypes = {
  title: PropType.string,
  content: PropType.string.isRequired,
};

export default Dialog;

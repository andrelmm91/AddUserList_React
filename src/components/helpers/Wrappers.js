// Wrapper here will render the JSX content without a <div></div> so reducing the divs and improving performance.
// Natively, we can add <></> or <React.Fragment></React.Fragment>
function Wrappers(props) {
  return props.children;
}

export default Wrappers;

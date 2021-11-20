// With Router Higher Order Component
import { useLocation } from 'react-router-dom';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    let location = useLocation();
    return <Component location={location} {...props} />;
  };

  return Wrapper;
};

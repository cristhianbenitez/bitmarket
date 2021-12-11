import { useLocation, useParams } from 'react-router-dom';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const location = useLocation();
    const params = useParams();
    return <Component location={location} params={params} {...props} />;
  };

  return Wrapper;
};

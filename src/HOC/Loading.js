import React from 'react';
import Loader from 'react-loader-spinner';
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (
        <div
        style={{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}
        >
                  <Loader type="ThreeDots" color="rgb(151, 163, 163)" height="100" width="100" />
        </div> 
    );
  }
}
export default WithLoading;
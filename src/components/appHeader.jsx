import React from 'react';

const AppHeader = ({resetWeightConverter}) => {
return (
  <div className="header-container container-fluid">
    <i onClick={resetWeightConverter} className="fa fa-refresh btn-icon"></i>
    <h1 className="appName">weight converter</h1>
  </div>
  );
}
 
export default AppHeader;

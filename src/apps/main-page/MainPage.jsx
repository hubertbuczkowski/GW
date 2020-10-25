import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Loading from '../../components/common/loading/Loading'
import Header from '../../components/propertyApp/header/Header'
import Body from '../../components/propertyApp/body/Body'

const App = (props) => {
  const { isLoading } = props;

  const Content = () => (<div style={{ display: "flex", flexDirection: "row", height: '100%' }}>
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
      <Header />
      <Body />
    </div>
  </div>)

  return (
    <div className="App">
      {isLoading ? <Loading /> : <Content />}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { isLoading } = state.mainReducer;
  return { isLoading };
}

const mapDispatchProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchProps)(App);

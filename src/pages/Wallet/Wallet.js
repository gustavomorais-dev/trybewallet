import React from 'react';
import Header from '../../components/Header/Header';
import WalletForm from '../../components/WalletForm/WalletForm';
import Table from '../../components/Table/Table';
import './Wallet.css';
import AppTitle from '../../components/AppTitle/AppTitle';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-page">
        <AppTitle />
        <Header />
        <div className="wallet-container">
          <WalletForm />
          <Table />
        </div>
      </div>
    );
  }
}

export default (Wallet);

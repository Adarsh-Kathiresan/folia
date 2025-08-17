// components/TransactionsView.tsx

import { useState } from 'react';
import { fetchTransactions } from '../services/transactionService';
import type { Transaction } from '../models/Budget';

const TransactionsView = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const data = await fetchTransactions();
      setTransactions(data);
    } catch (err) {
      console.error('Error fetching transactions:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <div className="w-full m-2 flex justify-between items-center">
            <h1 className="m-2">Transactions</h1>
            <button onClick={handleFetch} disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 m-2">
                {loading ? 'Loading...' : 'Fetch Transactions'}
            </button>
        </div>
      
      {transactions.length > 0 && (
        <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id}>
                <td>{txn.date}</td>
                <td>{txn.description}</td>
                <td>{txn.amount.toFixed(2)}</td>
                <td>{txn.categories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionsView;
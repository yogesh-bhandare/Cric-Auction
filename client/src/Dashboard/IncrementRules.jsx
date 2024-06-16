import React, { useState } from 'react';
import DashboardSide from '../Components/DashboardSide';

const IncrementRules = () => {
  const [rules, setRules] = useState([]);
  const [newRule, setNewRule] = useState({ bidAmount: '', newBidIncrement: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRule({ ...newRule, [name]: value });
  };

  const handleAddRule = () => {
    setRules([...rules, newRule]);
    setNewRule({ bidAmount: '', newBidIncrement: '' });
  };

  return (
    <div className="flex h-screen bg-[#262626] text-white">
      <DashboardSide />
      <div className="w-full md:ml-[16vw] p-8 pt-24">
        <h2 className="text-4xl font-bold text-[#F23D4C] mb-6">Incremental Bid Rules</h2>
        <p className="mb-4">
          Please click 'Add rule' button to add a bid increment rule. Example - Lets say you entered 'Bid Increase By' value while creating auction as 500.
          But you want the value to increase by 1000 once the bid reaches 5000 then add a rule and add 'Bid Amount' as 5000 and 'New Bid Increase By' as 1000.
          After this while doing bidding on dashboard the bid will increase by 1000 after 5000.
          If no rules are added then the bid will always increase by the 'Bid Increase By' value that was entered while creating the auction.
        </p>
        {rules.length === 0 ? (
          <p>No rules created yet.</p>
        ) : (
          <table className="min-w-full bg-white text-black rounded-lg shadow-lg mt-4">
            <thead className="bg-[#F23D4C] text-white">
              <tr>
                <th className="py-3 px-6 text-left">Bid Amount</th>
                <th className="py-3 px-6 text-left">New Bid Increment</th>
              </tr>
            </thead>
            <tbody>
              {rules.map((rule, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6">{rule.bidAmount}</td>
                  <td className="py-3 px-6">{rule.newBidIncrement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="mt-6">
          <input
            type="number"
            name="bidAmount"
            value={newRule.bidAmount}
            onChange={handleChange}
            placeholder="Bid Amount"
            className="py-2 px-4 mr-4 rounded bg-white text-black"
          />
          <input
            type="number"
            name="newBidIncrement"
            value={newRule.newBidIncrement}
            onChange={handleChange}
            placeholder="New Bid Increment"
            className="py-2 px-4 mr-4 rounded bg-white text-black"
          />
          <button
            onClick={handleAddRule}
            className="py-2 px-4 bg-[#F23D4C] text-white font-semibold rounded hover:bg-[#BFF207] hover:text-[#262626] transition-colors duration-300"
          >
            Add Rule
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncrementRules;

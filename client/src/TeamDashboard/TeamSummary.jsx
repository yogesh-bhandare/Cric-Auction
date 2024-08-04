import React, { useState, useEffect } from 'react';
import api from '../api';

const TeamSummary = () => {
  const [auctionResults, setAuctionResults] = useState([]);
  const [remainingAmount, setRemainingAmount] = useState(0); // Initial value set to 0

  useEffect(() => {
    const fetchAuctionResults = async () => {
      try {
        const response = await api.get(`/summary/`);
        setAuctionResults(response.data);
        if (response.data.length > 0) {
          const purseAmt = response.data[0].auction.purse_amt; // Extract purse_amt from the first result
          calculateRemainingAmount(response.data, purseAmt);
        }
      } catch (error) {
        console.error('Error fetching auction results:', error);
      }
    };

    fetchAuctionResults();
  }, []);

  const calculateRemainingAmount = (results, purseAmt) => {
    let remaining = purseAmt;

    results.forEach(result => {
      remaining -= result.sold_price || 0;
    });

    setRemainingAmount(remaining);
  };

  const renderPlayerCards = () => {
    return auctionResults.map((result) => (
      <div key={result.id} className="w-full md:w-1/2 lg:w-1/3 p-2">
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
            <img src={result.player.player_image} alt={result.player.player_name} className="w-full h-full object-cover" />
          </div>
          <p className="text-sm font-bold text-center">{result.player.player_name}</p>
          <p className="text-xs text-gray-600 text-center">Price Paid: {result.sold_price}L</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Team 1</h1>
          <p className="text-xl font-bold text-red-600">Amount left</p>
          <p className="text-2xl font-bold text-blue-800">{remainingAmount} L</p>
        </div>
        {remainingAmount === 0 ? (
          <p className="text-xl font-bold text-red-600 text-center">Purse empty</p>
        ) : (
          <div>
            <p className="text-xl font-bold text-white bg-red-600 rounded-md py-2 text-center mb-4">Your Squad</p>
            <div className="flex flex-wrap -mx-2">
              {renderPlayerCards()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamSummary;

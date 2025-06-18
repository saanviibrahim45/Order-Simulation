import React from 'react';

// 2. Build ExecutionResult.jsx (5%)
// This just shows:

// Filled %
// Average Price
// Slippage
// Very easy and fast to do. Could be a basic table or set of <p> tags.
import React from 'react';

function ExecutionResult({ result }) {
  if (!result) return null; // don’t render if result doesn't exist

  return (
    <div className="execution-result">
      <h3>Execution Summary</h3>
      <p><strong>Filled %:</strong> {result.filledPercent.toFixed(2)}%</p>
      <p><strong>Average Price:</strong> ${result.avgPrice.toFixed(2)}</p>
      <p><strong>Slippage:</strong> ${result.slippage.toFixed(4)}</p>
    </div>
  );
}

export default ExecutionResult;
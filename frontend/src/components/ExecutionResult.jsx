import React from 'react';

function ExecutionResult({ result }) {
  return (
    <div className="execution-result">
      <h3>Execution Result</h3>
      <p><strong>Filled %:</strong> {result.filledPercent.toFixed(2)}%</p>
      <p><strong>Average Price:</strong> ${result.avgPrice.toFixed(2)}</p>
      <p><strong>Slippage:</strong> ${result.slippage.toFixed(2)}</p>
    </div>
  );
}

export default ExecutionResult;

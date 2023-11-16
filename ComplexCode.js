/* 
** Filename: ComplexCode.js
** Description: A complex and elaborate JavaScript code demonstrating a data analysis tool.
** Author: AI Programmer
** Date: November 1, 2022
*/

// Constants
const DATA_SET_SIZE = 1000;
const MAX_VALUE = 100;
const MIN_VALUE = 1;

// Generate Random Data Set Function
function generateDataSet() {
  let dataSet = [];
  for (let i = 0; i < DATA_SET_SIZE; i++) {
    let randomValue = Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE;
    dataSet.push(randomValue);
  }
  return dataSet;
}

// Data Analysis Function
function analyzeDataSet(dataSet) {
  // Calculate Statistics
  let sum = dataSet.reduce((acc, value) => acc + value, 0);
  let average = sum / dataSet.length;
  let max = Math.max(...dataSet);
  let min = Math.min(...dataSet);

  // Calculate Median
  let sortedData = dataSet.slice().sort((a, b) => a - b);
  let median;
  if (sortedData.length % 2 === 0) {
    let midIndex = sortedData.length / 2;
    median = (sortedData[midIndex - 1] + sortedData[midIndex]) / 2;
  } else {
    median = sortedData[Math.floor(sortedData.length / 2)];
  }

  // Calculate Mode
  let modeMap = {};
  let maxCount = 0;
  for (let value of dataSet) {
    modeMap[value] = (modeMap[value] || 0) + 1;
    if (modeMap[value] > maxCount) {
      maxCount = modeMap[value];
    }
  }
  let mode = [];
  for (let value in modeMap) {
    if (modeMap[value] === maxCount) {
      mode.push(Number(value));
    }
  }

  // Return Analysis Result
  return {
    dataSetSize: dataSet.length,
    sum,
    average,
    max,
    min,
    median,
    mode,
  };
}

// Main Function
function main() {
  let dataSet = generateDataSet();
  let analysisResult = analyzeDataSet(dataSet);

  // Display Analysis Result
  console.log("Data Set Size:", analysisResult.dataSetSize);
  console.log("Sum:", analysisResult.sum);
  console.log("Average:", analysisResult.average);
  console.log("Max:", analysisResult.max);
  console.log("Min:", analysisResult.min);
  console.log("Median:", analysisResult.median);
  console.log("Mode:", analysisResult.mode);
}

// Execute Main Function
main();
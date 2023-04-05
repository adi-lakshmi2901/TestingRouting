import 'jest-preset-angular/setup-jest';
reporters: [
    "default",
    ["jest-html-reporters", {
      publicPath: "./test-report",
      filename: "test-report.html",
      pageTitle: "Test Report",
    }]
  ]
  
// module.exports = {
//     testResultsProcessor: "jest-junit",
//     testResultsProcessorOptions: {
//       outputName: "test-results.xml",
//     },
//     reporters: [
//       "default",
//       "jest-junit",
//     ],
//     collectCoverage: true,
//     coverageReporters: [
//       "html",
//       "text",
//     ],
//     coverageDirectory: "coverage",
//   };
  
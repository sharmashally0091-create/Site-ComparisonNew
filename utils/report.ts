import open from 'open';

import fs from 'fs';

export async function generateHtmlReport(
  results: any[]
) {

  const rows = results.map((result) => {

    return `

      <tr>
        <td>${result.url}</td>

        <td>
          ${result.visualMismatch?.toFixed(2) || 0}%
        </td>

        <td>
          ${result.passed ? '✅ PASSED' : '❌ FAILED'}
        </td>

        <td>
          <img
            src="../${result.screenshotPathStaging}"
            width="400"
          />
        </td>

        <td>
          <img
            src="../${result.screenshotPathLive}"
            width="400"
          />
        </td>

        <td>
          <img
            src="../${result.screenshotPathDiff}"
            width="400"
          />
        </td>
      </tr>
    `;
  }).join('');

  const html = `

  <html>

    <head>

      <title>
        Visual Comparison Report
      </title>

      <style>

        body {

          font-family: Arial;

          padding: 20px;

          background: #f5f5f5;
        }

        table {

          border-collapse: collapse;

          width: 100%;
        }

        td, th {

          border: 1px solid #ccc;

          padding: 10px;

          vertical-align: top;
        }

        img {

          border: 1px solid #999;
        }

        tr:nth-child(even) {

          background: #fff;
        }

      </style>

    </head>

    <body>

      <h1>
        Visual Comparison Report
      </h1>

      <table>

        <thead>

          <tr>

            <th>URL</th>

            <th>Mismatch %</th>

            <th>Status</th>

            <th>Staging</th>

            <th>Live</th>

            <th>Diff</th>

          </tr>

        </thead>

        <tbody>

          ${rows}

        </tbody>

      </table>

    </body>

  </html>
  `;

  if (!fs.existsSync('reports')) {

    fs.mkdirSync('reports');
  }

  fs.writeFileSync(
    'reports/visual-report.html',
    html
  );

  await open('reports/visual-report.html');

  console.log(`
========================================
HTML REPORT GENERATED
========================================

reports/visual-report.html
`);
}
import fs from 'fs-extra';

import path from 'path';

import { ComparisonResult }
  from '../types/comparison';

export async function generateHtmlReport(
  results: ComparisonResult[]
) {

  const reportDir =
    'reports/visual-report';

  await fs.ensureDir(reportDir);

  const cards = results.map((result) => {

    const status =
      result.passed
        ? 'PASSED'
        : 'FAILED';

    const color =
      result.passed
        ? '#16a34a'
        : '#dc2626';

    const stagingImage =
      normalizePath(
        result.screenshotPathStaging
      );

    const liveImage =
      normalizePath(
        result.screenshotPathLive
      );

    const diffImage =
      normalizePath(
        result.diffPath || ''
      );

    return `

      <div class="card">

        <div class="header">

          <h2>${result.url}</h2>

          <span
            class="badge"
            style="background:${color}"
          >
            ${status}
          </span>

        </div>

        <div class="issues">

          <div>
            <strong>
              Missing Sections:
            </strong>

            ${
              result.missingSections
                ?.length || 0
            }
          </div>

          <div>
            <strong>
              Broken Images:
            </strong>

            ${
              result.brokenImages
                ?.length || 0
            }
          </div>

        </div>

        <div class="grid">

          <div class="panel">
            <h3>Staging</h3>

            <img
              src="../../${stagingImage}"
            />
          </div>

          <div class="panel">
            <h3>Live</h3>

            <img
              src="../../${liveImage}"
            />
          </div>

          <div class="panel">
            <h3>Diff</h3>

            <img
              src="../../${diffImage}"
            />
          </div>

        </div>

      </div>
    `;
  }).join('\n');

  const html = `

  <!DOCTYPE html>

  <html>

    <head>

      <title>
        Visual Comparison Report
      </title>

      <style>

        body {

          font-family:
            Arial,
            sans-serif;

          background: #111827;

          color: white;

          margin: 0;

          padding: 30px;
        }

        h1 {

          margin-bottom: 40px;
        }

        .card {

          background: #1f2937;

          border-radius: 12px;

          padding: 20px;

          margin-bottom: 40px;
        }

        .header {

          display: flex;

          justify-content:
            space-between;

          align-items: center;

          margin-bottom: 20px;
        }

        .badge {

          padding:
            8px 14px;

          border-radius: 6px;

          font-weight: bold;
        }

        .issues {

          display: flex;

          gap: 30px;

          margin-bottom: 20px;
        }

        .grid {

          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 20px;
        }

        .panel {

          background: #374151;

          padding: 15px;

          border-radius: 10px;
        }

        img {

          width: 100%;

          border-radius: 8px;

          border: 1px solid #4b5563;
        }

        h3 {

          margin-top: 0;
        }

      </style>

    </head>

    <body>

      <h1>
        Visual Comparison Report
      </h1>

      ${cards}

    </body>

  </html>
  `;

  await fs.writeFile(
    path.join(reportDir, 'index.html'),
    html
  );

  console.log(`
========================================
HTML REPORT GENERATED
========================================

reports/visual-report/index.html
`);
}

function normalizePath(
  filePath: string
) {

  return filePath.replace(
    /\\/g,
    '/'
  );
}
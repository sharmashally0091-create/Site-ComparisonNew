export interface ComparisonResult {

  diffPath?: string;
  
  url: string;

  passed: boolean;

  missingSections: any[];

  brokenImages: string[];

  screenshotPathStaging: string;

  screenshotPathLive: string;

  error?: string;
}
/**
 * This JavaScript function checks if a Git commit message follows a specific format and provides
 * success or failure messages accordingly.
 * @param buffer - The `buffer` parameter is a buffer object that contains the content of a file. In
 * this code, it is used to read the content of the `.git/COMMIT_EDITMSG` file.
 * @returns The code is returning the first line of the commit message from the `.git/COMMIT_EDITMSG`
 * file.
 */
let supportsColor = { stdout: true };
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');

try {
  // eslint-disable-next-line global-require, @typescript-eslint/no-require-imports
  supportsColor = require('supports-color');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (error) {
  // DO NOTHING
  // on MODULE_NOT_FOUND when installed by pnpm
}

const colorSupported = supportsColor.stdout;

const YELLOW = colorSupported ? '\x1b[1;33m' : '';
const RED = colorSupported ? '\x1b[0;31m' : '';
const GREEN = colorSupported ? '\x1b[0;32m' : '';
const BLUE = colorSupported ? '\x1b[1;34m' : '';

/** End Of Style, removes all attributes (formatting and colors) */
const EOS = colorSupported ? '\x1b[0m' : '';
const BOLD = colorSupported ? '\x1b[1m' : '';

// eslint-disable-next-line no-undef
const commitMsgContent = fs.readFileSync('.git/COMMIT_EDITMSG', 'utf-8');
const msg = getFirstLine(commitMsgContent).replace(/\s{2,}/g, ' ');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const branchName = require('child_process')
  .execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' })
  .split('\n')[0];

const correctCommitMsgFormat = [
  'feat: <Message>',
  'chore: <Message>',
  'build: <Message>',
  'ci: <Message>',
  'docs: <Message>',
  'fix: <Message>',
  'perv: <Message>',
  'refactor: <Message>',
  'revert: <Message>',
  'style: <Message>',
  'test: <Message>',
  'hotfix: <Message>',
];

// ! for command working use this rulers
// const correctCommitMsgFormat = [
//   '[<Project Code>-<Ticket Number>] <Message>',
//   '<Project Code>-<Ticket Number>: <Message>',
//   '<Project Code>-<Ticket Number> <Message>',
//   '[hotfix] <Message>',
// ];

/*
 * DEVELOPER TODO: Change and update example below according to your preferences.
 */
const exampleMsg = [
  'feat: <Message>',
  'chore: <Message>',
  'build: <Message>',
  'ci: <Message>',
  'docs: <Message>',
  'fix: <Message>',
  'perv: <Message>',
  'refactor: <Message>',
  'revert: <Message>',
  'style: <Message>',
  'test: <Message>',
  'hotfix: <Message>',
];

const successMsg = `\n${GREEN}*********** Succesfully commit changes.***********${EOS}`;

const failMsg = `\n${RED}************* Invalid Git Commit Message *************${EOS}
           ${YELLOW}Use git conventional commit types only...
      ${YELLOW}'build','ci', 'hotfix', 'docs','feat','fix','perf',
        ${YELLOW}'refactor','revert','style','test' and 'chore'.
  `;

/*
 * DEVELOPER TODO: Change and update regex below according to your preferences.
 */

const pattern = new RegExp(
  '^(feat|chore|build|ci|docs|fix|perv|refactor|revert|style|test|hotfix):\\s.+',
);

// ! for command working use this rulers
// const pattern = new RegExp(
//   '\\[?sps-|SPS-|Sps-|hotfix|HOTFIX|Hotfix[0-9]+\\]? ?(-?|:?) .+'
// );

const result = pattern.test(msg);
const commitResultMsg = result ? 'SUCCESS' : 'FAILED';

if (result) {
  console.log(successMsg);
  console.log(`${BOLD}Commit result:${EOS} ${GREEN}${commitResultMsg}${EOS}`);
  console.log(`${BOLD}Current branch:${EOS} ${branchName}`);
  console.log(`${BOLD}Commit message:${EOS} ${BLUE}${msg}${EOS}\n`);

  process.exit(0);
} else {
  console.log(failMsg);

  console.log(`${BOLD}Commit result:${EOS} ${RED}${commitResultMsg}${EOS}`);
  console.log(`${BOLD}Current branch:${EOS} ${branchName}`);
  console.log(`${BOLD}Commit message:${EOS} ${RED}${msg}${EOS}`);

  console.log(`${BOLD}Correct format:${EOS}`);
  correctCommitMsgFormat.forEach((format, i) => {
    console.log(`  ${i + 1}) ${GREEN}${format}${EOS}`);
  });

  console.log(`${BOLD}Example:${EOS}`);
  exampleMsg.forEach((example, i) => {
    console.log(`  ${i + 1}) ${BLUE}${example}${EOS}`);
  });
  console.log();
  process.exit(1);
}

/**
 * It takes a buffer and returns the first line of the buffer as a string
 * @param buffer - The buffer to read from.
 * @returns The first line of the buffer.
 */
function getFirstLine(buffer) {
  return buffer.toString().split('\n').shift();
}

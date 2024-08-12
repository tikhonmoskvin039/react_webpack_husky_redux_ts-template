// cz.config.js
/** @type {import('cz-git').CommitizenGitOptions} */
export const alias = { "fd": 'docs: fix typos', "ur": "docs: update README" };
export const messages = {
  type: 'Select the type of change that you\'re committing:',
  scope: 'Denote the SCOPE of this change (optional):',
  customScope: 'Denote the SCOPE of this change:',
  subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
  body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
  breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
  footerPrefixesSelect: 'Select the ISSUES type of changeList by this change (optional):',
  customFooterPrefix: 'Input ISSUES prefix: ',
  footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
  generatingByAI: 'Generating your AI commit subject...',
  generatedSelectByAI: 'Select suitable subject by AI generated:',
  confirmCommit: 'Are you sure you want to proceed with the commit above?'
};
export const types = [
  { value: 'style', name: 'style:    Changes that do not affect the meaning of the code', emoji: ':lipstick:' },
  { value: 'feat', name: 'feat:     A new feature', emoji: ':sparkles:' },
  { value: 'fix', name: 'fix:      A bug fix', emoji: ':bug:' },
  { value: 'dep', name: 'dep:      Adding Dependencies' },
  { value: 'asset', name: 'Images:   Adding Images' },
  { value: 'docs', name: 'docs:     Documentation only changes', emoji: ':memo:' },
  { value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature', emoji: ':recycle:' },
  { value: 'perf', name: 'perf:     A code change that improves performance', emoji: ':zap:' },
  { value: 'test', name: 'test:     Adding missing tests or correcting existing tests', emoji: ':white_check_mark:' },
  { value: 'build', name: 'build:    Changes that affect the build system or external dependencies', emoji: ':package:' },
  { value: 'ci', name: 'ci:       Changes to our CI configuration files and scripts', emoji: ':ferris_wheel:' },
  { value: 'chore', name: 'chore:    Other changes that don\'t modify src or test files', emoji: ':hammer:' },
  { value: 'revert', name: 'revert:   Reverts a previous commit', emoji: ':rewind:' }
];
export const useEmoji = false;
export const emojiAlign = 'center';
export const useAI = false;
export const aiNumber = 1;
export const themeColorCode = '';
export const scopes = [];
export const allowCustomScopes = false;
export const allowEmptyScopes = true;
export const customScopesAlign = 'bottom';
export const customScopesAlias = 'custom';
export const emptyScopesAlias = 'empty';
export const upperCaseSubject = true;
export const markBreakingChangeMode = false;
export const allowBreakingChanges = ['feat', 'fix'];
export const breaklineNumber = 100;
export const breaklineChar = '|';
export const skipQuestions = ['breaking', 'footer', 'footerPrefixesSelect', 'customFooterPrefix'];
export const issuePrefixes = [{ value: 'closed', name: 'closed:   ISSUES has been processed' }];
export const customIssuePrefixAlign = 'top';
export const emptyIssuePrefixAlias = 'skip';
export const customIssuePrefixAlias = 'custom';
export const allowCustomIssuePrefix = true;
export const allowEmptyIssuePrefix = true;
export const confirmColorize = true;
export const maxHeaderLength = Infinity;
export const maxSubjectLength = Infinity;
export const minSubjectLength = 0;
export const scopeOverrides = undefined;
export const defaultBody = '';
export const defaultIssues = '';
export const defaultScope = '';
export const defaultSubject = '';
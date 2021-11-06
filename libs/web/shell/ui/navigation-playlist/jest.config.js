module.exports = {
  displayName: 'web-shell-ui-navigation-playlist',
  preset: '../../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../../coverage/libs/web/shell/ui/navigation-playlist',
};

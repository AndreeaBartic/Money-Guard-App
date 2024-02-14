export const customSelectStyles = {
  container: styles => ({
    ...styles,

    maxHeight: '50px',

    fontFamily: 'Poppins',

    fontSize: '16px',
    borderRadius: '8px',
  }),
  singleValue: styles => ({
    ...styles,
    color: 'var(--white)',
    fontSize: '16px',
    marginLeft: '20px',
  }),
  control: styles => ({
    ...styles,

    marginTop: '40px',
    background: 'transparent',
    minHeight: '50px',

    border: 'none',
    boxShadow: 'none',
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    cursor: 'pointer',
    backgroundColor: isFocused ? 'var(--transparency-10)' : 'transparent',
    color: isFocused ? 'var(--dashboard-text)' : 'var(--white)',
    '&:hover': {
      backgroundColor: isFocused ? 'var(--transparency-10)' : 'transparent',
      color: isFocused ? 'var(--dashboard-text)' : '#FBFBFB',
    },
    textAlign: 'left',
    paddingLeft: '20px',
    fontSize: '16px',
  }),
  menu: styles => ({
    ...styles,
    textAlign: 'center',
    borderRadius: '8px',
    margin: '0',
    background:
      'linear-gradient(360deg, rgba(83, 61, 186, 1) 0%, rgba(80, 48, 154, 1) 35.94%, rgba(106, 70, 165, 1) 61.04%, rgba(133, 93, 175, 1) 100%)',
  }),
  menuList: styles => ({
    ...styles,
    borderRadius: '8px',
    boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(50px)',
    maxHeight: '157px',
    '&::-webkit-scrollbar': {
      width: '4px',
    },

    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '#bdbdbd',
    },

    '&::-webkit-scrollbar-thumb:hover': {
      background: '#bdbdbd',
    },
  }),
  placeholder: styles => ({
    ...styles,
    paddingBottom: '2px',
    color: 'var(--white)',
    fontSize: '16px',
  }),
  indicatorSeparator: styles => ({
    ...styles,
    display: 'none',
  }),
};

export const lightTheme = {
  colors: {
    red: '#EC0C0C',
    button: '#007E23',
    hoverButton: '#62C99D',
    disabledRadioText: '#797979',
    disableRadioBackground: '#F0F0F0',
    disabled: '#D4D4D4',
    hoverGrey: '#BACBD9',
    white: '#FFFFFF',
    text: '#333333',
    transparent: 'transparent',
    inactive: '#555555',
    orange: '#F7B006',
    yellow: '#FFE768',
    blue: '#169BD5',
    lightBlue: '#56BBEC',
    darkBlue: '#03527F',
    arctic: '#F2FBFF',
    purple: '#8F59B9',
    pink: '#F72B64',
    grey: '#D7D7D7',
    tableRow: '#EDF3F6',
    header: 'rgba(242,242,242, 0.2)',
    border: '#999999',
    facebook: '#3B5998',
    twitter: '#55ACEE',
    instagram: '#EF5285',
    linkedin: '#007AB9',
    background: '#E5E5E5',
    lightBackground: '#F5F6F6',
    blackInactive: 'rbga(0, 0, 0, 0.54)',
    tableHeader: '#E4F3FA',
    path: '#5672FA',
    footerBackground: '#F2F2F2',
    green: '#007E23',
    secondButton: '#C4CDD5',
    strongPink: '#C032A1',
    hoverYellowButton: '#EECB4F',
    hoverBlueButton: '#169BD5',
    hoverRedButton: '#F04545',
    hoverGreenButton: '#2FB998',
    danger: '#FB3030',
    roseWhite: '#FFF1EA',
    headerGradient: '#B3E9F5',
    black: '#000000',
    yellowLight: 'rgba(255, 231, 104, 0.5)'
  },
  fonts: {
    main: ['Roboto', 'sans-serif'],
    defaultSize: 16
  },
  typography: {
    h1: {
      fontFamily: 'Roboto',
      fontWeight: 700,
      fontSize: 24,
      lineHeight: '28px',
      letterSpacing: '-0.392308px',
      margin: 0
    },
    h2: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: 24,
      lineHeight: '23px',
      letterSpacing: '-0.392308px',
      margin: 0
    },
    h3: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: 20,
      lineHeight: '21.09px',
      letterSpacing: '-0.392308px',
      margin: 0
    },
    h4: {
      fontFamily: 'Roboto',
      fontWeight: 700,
      fontSize: 18,
      lineHeight: '28px',
      letterSpacing: '-0.392308px',
      margin: 0
    },
    h5: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: 18,
      lineHeight: '19.36px',
      letterSpacing: '-0.392308px',
      margin: 0
    },
    h6: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '21px',
      letterSpacing: '-0.392308px',
      margin: 0
    },
    bodyBold: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '19px',
      /* identical to box height */
      letterSpacing: '-0.392308px'
    },
    body: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '19px',
      /* identical to box height */
      letterSpacing: '-0.392308px'
    },
    button: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 16,
      lineHeight: '19px',
      letterSpacing: '-0.392308px'
    },
    boldHeader: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '16.8px',
      letterSpacing: '-0.392308px'
    },
    boldTitle: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 12,
      lineHeight: '16.8px',
      letterSpacing: '-0.392308px'
    },
    subTitle: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: 12,
      fontStyle: 'normal',
      lineHeight: '12px',
      letterSpacing: '-0.392308px',
      textAlign: 'left'
    },
    subTitleSetting: {
      fontFamily: 'Arial',
      fontWeight: 400,
      fontSize: 12,
      fontStyle: 'normal',
      lineHeight: '12px',
      letterSpacing: '-0.392308px',
      textAlign: 'left'
    },
    smallSubTitleSetting: {
      fontFamily: 'Arial',
      fontWeight: 400,
      fontSize: 10,
      fontStyle: 'normal',
      lineHeight: '12.5px',
      letterSpacing: '-0.392308px'
    },
    chart: {
      fontFamily: 'Arial, Roboto',
      fontStyle: 'normal',
      fontSize: 12,
      fontWeight: 400,
      lineHeight: '15px',
      letterSpacing: '-0.392308px'
    },
    title: {
      fontFamily: 'Arial, Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 11,
      lineHeight: '13px',
      letterSpacing: '-0.392308px'
    },
  },
  breakpoints: {
    xs: {
      flex: 1,
      minWidth: 244,
      maxWidth: 244
    },
    sm: {
      flex: 2,
      minWidth: 244,
      maxWidth: 328
    },
    md: {
      flex: 3,
      minWidth: 244,
      maxWidth: 620
    },
    lg: {
      minWidth: 244,
      maxWidth: 980,
      flex: 4
    }
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  spacing: {
    unit: 16
  },
  content: {
    maxWidth: 1216,
    margin: 'auto'
  },
  boxShadow: '2px 4px 10px rgba(196, 205, 213, 0.5)',
  link: {
    textDecoration: 'none',
    textTransform: 'capitalize',
    padding: '.25em 1em'
  },
  cursor: 'pointer'
}

export type Color = keyof typeof lightTheme.colors

type LightType = typeof lightTheme

export interface LightTheme extends LightType {}

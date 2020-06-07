const {StyleSheet, css} = aphrodite


const backgroundColor ="#111111";

var font = {
    fontSize: 122,
    lineHeight: 20
  };

var fontSize = 22;

const sheet = StyleSheet.create({
    button: {
      extend: font,
      fontSize: fontSize,
      border: '1px solid',
      borderRadius: 5,
      padding: '0 1em',
      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      textShadow: '0 -1px 0 rgba(0, 0, 0, 0.25)',
      backgroundRepeat: 'repeat-x',
      color: '#fff',
      fontWeight: 400,
      '& span': {
        marginRight: 5,
        color: '#fff'
      }
    },
    primary: {
      borderColor: '#1177cd #0f6ab6 #0d5c9e',
      backgroundImage: 'linear-gradient(to bottom, #2591ed 0%, #1177cd 100%)',
      backgroundColor: '#1385e5',
      '&:hover': {
        backgroundImage: 'linear-gradient(to bottom, #3c9def 0%, #1385e5 100%)'
      }
    }
  })
  
const styles = StyleSheet.create({
    red: {
        backgroundColor: backgroundColor,
        height:'100vh'
    }
});

  // document.body.innerHTML = `
  //   <div class="${css(styles.red)}">
  //   <button class="${css(sheet.button, sheet.primary)}">
  //   <span>&#10004;</span>Primary
  //   </button>
  //   </div>
  // `
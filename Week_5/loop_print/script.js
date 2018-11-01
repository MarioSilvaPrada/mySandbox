let answer = prompt('run loop?').toLowerCase();

if (answer === 'yes') {

    for (let i = 1; i < 41 ; i ++) {
        let loopNum = `Loop round ${i}`;
    
        if ( (i % 5 === 0) && (i % 3 === 0)) {
            alert(`${loopNum}
    
            HEY YO`);
        } else if ( i % 5 === 0) {
            alert(`${loopNum}
    
            YO`);
    
        } else if ( i % 3 === 0 ) {
            alert(`${loopNum}
    
            HEY`);
        } else {
            alert(`${loopNum}
    
            ${i}
            `);
        }
        
    }

} else if (answer === 'no') {
    alert('OK! We won\'t run the loop, as you wish')
} else {
    alert('answer must be "YES" or "NO"')
}




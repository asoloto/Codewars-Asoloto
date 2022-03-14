const MORSE_CODE = { '.-': 'A',
            '-...': 'B',
            '-.-.': 'C',
            '-..': 'D',
            '.': 'E',
            '..-.': 'F',
            '--.': 'G',
            '....': 'H',
            '..': 'I',
            '.---': 'J',
            '-.-': 'K',
            '.-..': 'L',
            '--': 'M',
            '-.': 'N',
            '---': 'O',
            '.--.': 'P',
            '--.-': 'Q',
            '.-.': 'R',
            '...': 'S',
            '-': 'T',
            '..-': 'U',
            '...-': 'V',
            '.--': 'W',
            '-..-': 'X',
            '-.--': 'Y',
            '--..': 'Z',
            '...---...': 'SOS'
          }

function decodeMorse(morseCode){
    return morseCode.split("   ").map(el=>el.split(" ").map(cd=>MORSE_CODE[cd]).join("")).join(" ").trim();
}

console.log(decodeMorse('.- ... --- .-.. --- - ---'))
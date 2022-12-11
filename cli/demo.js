import { Buffer } from 'node:buffer'

const auth = 'Basic ' + Buffer.from('PKS7ZFY-5XNUGWQ-RHE43RQ-ZIMAIOY:1LyATTwGgzzEHec287cHqIHlTNcS88iBSH8oRKIjetc=').toString('base64');
console.log(auth)
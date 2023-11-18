import Image from 'next/image'
var punycode = require('punycode');
console.log(punycode.encode('mañana')); // 'maana-pta'
export default function Home() {
  return (
    <div className='text-white'>
      Hello World
    </div>
  )
}

console.log(`
${'x'.repeat(3)}
${'hello'.repeat(2) }  
${ 'na'.repeat(2.9) }  2

${'na'.repeat(0) }
${'na'.repeat(-0.9)}  等同于0
${'na'.repeat(NaN)}  等同于0
`);


console.log(`
padStart()
${'x'.padStart(5, 'ab') }
${'x'.padStart(4, 'ab') }
${'x'.padEnd(5, 'ab') }
${'x'.padEnd(4, 'ab') }
常用情况，补全字符串的数字0
${'1'.padStart(10, '0')}
${'12'.padStart(10, '0') }
${'123456'.padStart(10, '0') } 
`);
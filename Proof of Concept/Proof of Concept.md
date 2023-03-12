![](https://github.com/Ketho/PJTIR/blob/master/Proof%20of%20Concept/Proof%20of%20Concept.png)

## hosts
- PC0 `2040::10:10/112`, gateway `2040::10:0`
- PC1 `2040::20:10/112`, gateway `2040::20:0`

## tests
- ping PC0 -> PC1  
`ping 2040::20:10`
- ping PC0 -> R1 lo0  
`ping 2020::30:0`

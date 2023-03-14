![](https://github.com/Ketho/PJTIR/blob/master/Proof%20of%20Concept/Proof%20of%20Concept.png)

## hosts
- PC0 `2a02:a420:b:151::10/64`, gateway `2a02:a420:b:151::0`
- PC1 `2a02:a420:b:152::10/64`, gateway `2a02:a420:b:152::0`

## tests
- ping PC0 -> PC1  
`ping 2a02:a420:b:152::10`
- ping PC0 -> R1 lo0  
`ping 2a02:a420:b:110::12:0`

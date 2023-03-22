- IP Plan: https://github.com/Ketho/PJTIR/issues/1

# within HQ
## between routers
- ping HQ-R1 -> HQ-R2
`ping 2a02:a420:b:111::12:0`

# between hosts
- ping HQ-PC1 -> HQ-PC2 (vlan10 to vlan100)
`ping 2a02:a420:b:160::10`

- ping HQ-PC1 -> Server1 (vlan10 to vlan20)
`ping 2a02:a420:b:152::10`

- ping HQ-PC1 -> HQ-R1 lo0  
`ping 2a02:a420:b:300::1:0`

### between HQ and BR
## between routers
- ping HQ-R1 -> BR-R1 lo0
`ping 2a02:a420:b:210::12:0`

# between hosts
- ping HQ-PC1 -> BR-PC1 (vlan10 to vlan10)
`ping 2a02:a420:b:251::10`

- ping HQ-PC1 -> BR-PC2 (vlan10 to vlan100)
`ping 2a02:a420:b:260::10`

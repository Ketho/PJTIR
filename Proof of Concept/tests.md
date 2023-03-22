- IP Plan: https://github.com/Ketho/PJTIR/issues/1

# within HQ
_between routers_
- ping HQ-R1 -> HQ-R2 `ping 2a02:a420:b:111::12:0`

_between hosts_
- ping HQ-PC1 -> HQ-PC2 `ping 2a02:a420:b:160::10` (vlan10 to vlan100)
- ping HQ-PC1 -> Server1 `ping 2a02:a420:b:152::10` (vlan10 to vlan20)
- ping HQ-PC1 -> HQ-R1 lo0 `ping 2a02:a420:b:300::1:0`

# between HQ and BR
_between routers_
- ping HQ-R1 -> BR-R1 lo0 `ping 2a02:a420:b:210::12:0`

_between hosts_
- ping HQ-PC1 -> BR-PC1 `ping 2a02:a420:b:251::10` (vlan10 to vlan10)
- ping HQ-PC1 -> BR-PC2 `ping 2a02:a420:b:260::10` (vlan10 to vlan100)

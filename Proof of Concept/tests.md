See [IP Plan](https://github.com/Ketho/PJTIR/issues/1)

# ping
## within HQ
_between routers_
- ping HQ-R1 -> HQ-R2 lo0 `ping 2a02:a420:b:111::12:0`

_between hosts_
- ping HQ-PC1 -> HQ-PC2 `ping 2a02:a420:b:160::10` (vlan10 to vlan100)
- ping HQ-PC1 -> Server1 `ping 2a02:a420:b:152::10` (vlan10 to vlan20)
- ping HQ-PC1 -> HQ-R1 lo0 `ping 2a02:a420:b:300::1:0`

## between HQ and BR
_between routers_
- ping HQ-R1 -> BR-R1 lo0 `ping 2a02:a420:b:210::12:0`

_between hosts_
- ping HQ-PC1 -> BR-PC1 `ping 2a02:a420:b:251::10` (vlan10 to vlan10)
- ping HQ-PC1 -> BR-PC2 `ping 2a02:a420:b:260::10` (vlan10 to vlan100)

## ssh
HQ-R2
- ssh -rl cisco 2a02:a420:b:111::12:0

BR-R1
-- https://unix.stackexchange.com/questions/402746/ssh-unable-to-negotiate-no-matching-key-exchange-method-found
```lua
C:\Users\user>ssh -l cisco 2a02:a420:b:300::1:0
Unable to negotiate with 2a02:a420:b:300::1:0 port 22: no matching key exchange method found. Their offer: diffie-hellman-group1-sha1

C:\Users\user>ssh -l cisco 2a02:a420:b:300::1:0 -oKexAlgorithms=+diffie-hellman-group1-sha1
Unable to negotiate with 2a02:a420:b:300::1:0 port 22: no matching cipher found. Their offer: aes128-cbc,3des-cbc,aes192-cbc,aes256-cbc
```
- ssh -l cisco 2a02:a420:b:210::12:0 -oKexAlgorithms=+diffie-hellman-group1-sha1 -c aes256-cbc

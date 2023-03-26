See [IP Plan](https://github.com/Ketho/PJTIR/issues/1)

# ping
## HQ
- HQ-PC1    `ping 2a02:a420:b:1a1::10`  (vlan10)
- HQ-PC2    `ping 2a02:a420:b:1a10::10` (vlan100)
- Server1   `ping 2a02:a420:b:1a2::10`  (vlan20)
- HQ-R1 lo0 `ping 2a02:a420:b:110::f:0`
- HQ-R2 lo0 `ping 2a02:a420:b:111::f:0`
## ISP
- ISP lo0   `ping 2a02:a420:b:300::f:0`
## BR
- BR-R1 lo0 `ping 2a02:a420:b:210::f:0`
- BR-PC1    `ping 2a02:a420:b:2a1::10`  (vlan10)
- BR-PC2    `ping 2a02:a420:b:2a10::10` (vlan100)

# ssh
- HQ-R1     `ssh -l cisco 2a02:a420:b:110::f:0`
- HQ-DLS1   `ssh -l cisco 2a02:a420:b:120::f:0`
- BR-R1     `ssh -l cisco 2a02:a420:b:210::f:0`

BR-R1
-- https://unix.stackexchange.com/questions/402746/ssh-unable-to-negotiate-no-matching-key-exchange-method-found
```lua
C:\Users\user>ssh -l cisco 2a02:a420:b:300::1:0
Unable to negotiate with 2a02:a420:b:300::1:0 port 22: no matching key exchange method found. Their offer: diffie-hellman-group1-sha1

C:\Users\user>ssh -l cisco 2a02:a420:b:300::1:0 -oKexAlgorithms=+diffie-hellman-group1-sha1
Unable to negotiate with 2a02:a420:b:300::1:0 port 22: no matching cipher found. Their offer: aes128-cbc,3des-cbc,aes192-cbc,aes256-cbc
```
- ssh -l cisco 2a02:a420:b:210::12:0 -oKexAlgorithms=+diffie-hellman-group1-sha1 -c aes256-cbc
